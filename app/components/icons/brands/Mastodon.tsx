/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Icon, IconProps } from "..";

export const Mastodon = (props: IconProps) => {
	return (
		<Icon {...props} ariaLabel="Mastodon" viewBox={"0 0 512 512"}>
			<path
				xmlns="http://www.w3.org/2000/svg"
				d="M465 179.11C465 81.91 401.29 53.41 401.29 53.41C338.77 24.71 172.73 25.01 110.81 53.41C110.81 53.41 47.0899 81.91 47.0899 179.11C47.0899 294.81 40.4899 438.51 152.72 468.21C193.23 478.91 228.04 481.21 256.05 479.61C306.86 476.81 335.37 461.51 335.37 461.51L333.67 424.61C333.67 424.61 297.36 436.01 256.55 434.71C216.14 433.31 173.55 430.31 166.92 380.71C166.305 376.102 166.005 371.458 166.02 366.81C251.65 387.71 324.67 375.91 344.77 373.51C400.89 366.81 449.77 332.21 456 300.61C465.8 250.81 465 179.11 465 179.11ZM389.88 304.31H343.25V190.11C343.25 140.41 279.25 138.51 279.25 197.01V259.51H232.92V197C232.92 138.5 168.92 140.4 168.92 190.1V304.3H122.19C122.19 182.2 116.99 156.4 140.6 129.3C166.5 100.4 220.42 98.5 244.43 135.4L256.03 154.9L267.63 135.4C291.74 98.3 345.75 100.6 371.46 129.3C395.17 156.6 389.86 182.3 389.86 304.3L389.88 304.31Z"
				fill="currentColor"
			/>
		</Icon>
	);
};