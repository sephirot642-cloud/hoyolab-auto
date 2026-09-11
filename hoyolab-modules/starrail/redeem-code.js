module.exports = class RedeemCode {
	/** @type {import("../template")} */
	#instance;

	constructor (instance) {
		this.#instance = instance;
	}

	async redeemCode (accountData, code) {
		if (!accountData.cookie.includes("cookie_token=") && !accountData.cookie.includes("cookie_token_v2=")) {
			try {
				const refreshCookie = await this.#instance.updateCookie(accountData);
				if (refreshCookie?.success && refreshCookie?.data) {
					const { accountId, token } = refreshCookie.data;
					accountData.cookie = `${accountData.cookie}; cookie_token=${token}; account_id=${accountId}`;
				}
			}
			catch (e) {
				app.Logger.debug(`${this.#instance.fullName}:RedeemCode`, `Failed to fetch cookie_token: ${e.message}`);
			}
		}

		const cookieData = app.HoyoLab.parseCookie(accountData.cookie, {
			whitelist: [
				"cookie_token_v2",
				"account_mid_v2",
				"account_id_v2",
				"cookie_token",
				"account_id"
			]
		});

		const res = await app.Got("HoYoLab", {
			url: this.#instance.config.url.redemption,
			method: "POST",
			responseType: "json",
			throwHttpErrors: false,
			searchParams: {
				cdkey: code,
				game_biz: "hkrpg_global",
				lang: "en",
				region: accountData.region,
				t: Date.now(),
				uid: accountData.uid
			},
			headers: {
				Cookie: cookieData
			}
		});

		if (res.statusCode !== 200) {
			app.Logger.log(`${this.#instance.fullName}:RedeemCode`, {
				message: "Request threw non-200 status code",
				args: {
					code,
					status: res.statusCode,
					body: res.body
				}
			});

			return {
				success: false
			};
		}
		if (res.body.retcode !== 0) {
			app.Logger.log(`${this.#instance.fullName}:RedeemCode`, {
				message: "Failed to redeem code",
				args: {
					cause: app.HoyoLab.errorMessage(this.#instance.name, res.body.retcode),
					code,
					status: res.body.retcode,
					body: res.body
				}
			});

			return {
				success: false,
				message: res.body.message
			};
		}

		app.Logger.info(`${this.#instance.fullName}:RedeemCode`, `(${accountData.uid}) ${accountData.nickname} redeemed code: ${code}`);

		return {
			success: true
		};
	}
};
