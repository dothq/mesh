/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Meta from "../components/common/Meta";
import Script from "../components/Script";
import Banner from "../components/ui/Banner";
import HTMLComment from "../components/ui/HTMLComment";
import { getPercentTranslated, l } from "../l10n";
import { PageProps } from "../types";
import { withCacheBuster } from "../utils/cache";

const Layout = ({
	meta,
	url,
	Component,
	schema,
	lang
}: PageProps & { Component: any }) => {
	schema = schema || {
		"@context": "http://schema.org",
		"@type": "Organization",
		name: "Dot HQ",
		url: `https://${url.host}/`,
		logo: `https://${url.host}/media/icons/256x256.png`,
		email: "contact+www@dothq.org",
		sameAs: [
			"https://twitter.com/DotBrowser",
			"https://github.com/dothq",
			"https://mastodon.social/@dothq"
		],
		contactPoint: [
			{
				"@type": "ContactPoint",
				email: "contact+support@essential.gg",
				url: `https://${url.host}/support`,
				contactType: "customer service"
			}
		]
	};

	return (
		<>
			<html
				lang={lang}
				dir="ltr"
				class="no-js"
				prefix="og: https://ogp.me/ns#"
				itemScope
				itemType="http://schema.org/WebSite"
			>
				<head>
					<link
						rel="stylesheet"
						href={withCacheBuster(
							"/media/css/scalar.css"
						)}
						type="text/css"
					></link>
					{meta.css &&
						meta.css.map((path: string) => (
							<link
								rel="stylesheet"
								href={withCacheBuster(
									`/media/css/${path}`
								)}
								type="text/css"
							></link>
						))}
					<Meta host={url.host} />
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(schema, null, 4)
						}}
					></script>
					<title>
						{typeof meta.titleSuffix !== "undefined"
							? meta.titleSuffix == true
								? l("page-title-format", {
										title: meta.title
								  })
								: meta.title
							: l("page-title-format", {
									title: meta.title
							  })}
					</title>
					<HTMLComment>
						Most of our pages should work with JavaScript
						disabled.
						{"\n"}- If you believe this isn't the case,
						please
						{"\n"}- file a bug report at
						https://github.com/dothq/scalar/issues/new
						{"\n"}- and we will ensure this gets resolved.
					</HTMLComment>
					<Script src={"scalar.js"} defer />
					{meta.js &&
						meta.js.map((path: string) => (
							<Script src={path} defer />
						))}
				</head>

				<body>
					<div id="__scalar">
						{getPercentTranslated() < 100 && (
							<Banner type={"info"}>
								This language isn't fully translated
								yet. Some parts of the page will
								appear in English. You can help
								contribute to our translations.
							</Banner>
						)}

						<Header />

						<main
							class="fdn-main-content"
							id={"main-content"}
							role="main"
						>
							<Component />
						</main>

						<Footer />
					</div>
				</body>
			</html>
		</>
	);
};

export default Layout;
