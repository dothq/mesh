/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import clsx from "clsx";
import { JSXInternal } from "preact/src/jsx";

const TextField = ({
	label,
	prefix,
	suffix,
	outerId,
	id,
	size,
	error,
	...rest
}: {
	label?: any;
	prefix?: any;
	suffix?: any;
	outerId?: string;
	size?: FDNSize;
	id?: string;
	error?: string;
} & JSXInternal.HTMLAttributes<HTMLInputElement>) => {
	size = size ? size : ("md" as any);

	const className = clsx("fdn-field", {
		"has-prefix": !!prefix,
		"has-suffix": !!suffix,
		"has-error": !!error,
		[size as string]: true
	});

	return (
		<div id={outerId} className={className}>
			{label && <label htmlFor={id}>{label}</label>}

			<div className={"fdn-input"}>
				{prefix && (
					<span className={"fdn-input-prefix"}>
						{prefix}
					</span>
				)}
				<input {...rest} id={id} />
				{suffix && (
					<span className={"fdn-input-suffix"}>
						{suffix}
					</span>
				)}
			</div>

			<span className={"fdn-input-error"}>{error}</span>
		</div>
	);
};

export default TextField;