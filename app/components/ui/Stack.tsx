/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import clsx from "clsx";
import { createElement } from "preact";
import { JSXInternal } from "preact/src/jsx";

const Stack = ({
	orientation,
	gap,
	as,
	flex,
	x,
	y,
	xy,
	wrap,
	w,
	h,
	children,
	...rest
}: {
	orientation?: FDNOrientation;
	gap?: FDNSizeExtended;
	as?: keyof JSXInternal.IntrinsicElements;
	flex?: string;
	x?: string;
	y?: string;
	xy?: string;
	wrap?: boolean;
	w?: string;
	h?: string;
	className?: string;
	children?: any;
}) => {
	as = as ? as : "div";

	if (xy) {
		if (xy.includes(" ") && xy.split(" ").length == 2) {
			x = xy.split(" ")[0];
			y = xy.split(" ")[1];
		} else {
			x = xy;
			y = xy;
		}
	}

	const className = clsx(
		"fdn-stack",
		{
			[orientation as string]: !!orientation,
			[`gap-${gap}`]: !!gap,
			[`flex-${flex}`]: !!flex,
			[`x-${x}`]: !!x,
			[`y-${y}`]: !!y,
			[`w-${w}`]: !!w,
			[`h-${h}`]: !!h,
			wrap: !!wrap
		},
		rest.className || ""
	);

	return createElement(as, { ...rest, className }, children);
};

export default Stack;
