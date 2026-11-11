import { DevKitDialog as Dialog } from './pl_dataversedialogbuilder_demo.dialog';

const pl_dataversedialogbuilder_demo = (function () {
	"use strict";

	let form: Dialog.pl_dataversedialogbuilder_demo;

	async function OnLoad(executionContext: any): Promise<void> {
		form = new Dialog.pl_dataversedialogbuilder_demo(executionContext);
	}

	async function OkClick(executionContext: any): Promise<void> {
	}

	async function CancelClick(executionContext: any): Promise<void> {
	}

	return {
		OnLoad: OnLoad,
		OkClick: OkClick,
		CancelClick: CancelClick
	};
})();

export { pl_dataversedialogbuilder_demo };
