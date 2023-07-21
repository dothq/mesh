/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Icon, IconProps } from ".";

export const Search = (props: IconProps) => {
	return (
		<Icon {...props} ariaLabel="Search">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C7.85725 13 9.11734 12.584 10.1597 11.8726C10.2616 11.8031 10.399 11.8132 10.4862 11.9004L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L11.9004 10.4862C11.8132 10.399 11.8031 10.2616 11.8726 10.1597C12.584 9.11734 13 7.85725 13 6.5ZM11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11C8.98528 11 11 8.98528 11 6.5Z"
				fill="currentColor"
			/>
		</Icon>
	);
};
