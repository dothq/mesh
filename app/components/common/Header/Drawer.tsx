/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { HeaderConfig, renderHeaderElement } from ".";
import { Close } from "../../icons/Close";
import Button from "../../ui/Button";
import NavItems from "./Items";

const HeaderDrawer = ({ config }: { config: HeaderConfig }) => {
	return (
		<div
			id="header-menu"
			class="fdn-header-drawer fdn-focus-none"
			tabIndex={-1}
		>
			<div class="fdn-header-drawer-container" tabIndex={-1}>
				<ul class="fdn-header-items" role="list">
					<NavItems config={config} />

					<>
						{config.end.map((i: any) => {
							i.fullwidth = true;

							return <li>{renderHeaderElement(i)}</li>;
						})}
					</>
				</ul>

				<div id="menu-close">
					<Button
						type={"secondary"}
						href={"#menu-button"}
						aria-label="Close Navigation Menu..."
						hasIcon
					>
						<Close />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default HeaderDrawer;
