/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Icon, IconProps } from ".";

export const Download = (props: IconProps) => {
	return (
		<Icon {...props} ariaLabel="Download">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M2.5 10C2.77614 10 3 10.2239 3 10.5V11.5C3 12.8807 4.11929 14 5.5 14H11.5C12.8807 14 14 12.8807 14 11.5V10.5C14 10.2239 14.2239 10 14.5 10C14.7761 10 15 10.2239 15 10.5V11.5C15 13.433 13.433 15 11.5 15H5.5C3.567 15 2 13.433 2 11.5V10.5C2 10.2239 2.22386 10 2.5 10Z"
				fill="currentColor"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M8.5 1C8.77614 1 9 1.22386 9 1.5V9.29289L11.6464 6.64645C11.8417 6.45118 12.1583 6.45118 12.3536 6.64645C12.5488 6.84171 12.5488 7.15829 12.3536 7.35355L8.85355 10.8536C8.65829 11.0488 8.34171 11.0488 8.14645 10.8536L4.64645 7.35355C4.45118 7.15829 4.45118 6.84171 4.64645 6.64645C4.84171 6.45118 5.15829 6.45118 5.35355 6.64645L8 9.29289V1.5C8 1.22386 8.22386 1 8.5 1Z"
				fill="currentColor"
			/>
		</Icon>
	);
};
