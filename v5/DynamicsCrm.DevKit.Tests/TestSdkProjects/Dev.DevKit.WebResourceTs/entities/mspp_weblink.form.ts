/**
 * mspp_weblink.form.ts - mspp_weblink Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_weblink containing form classes: mspp_weblink.FormClassName
 * 3. Aggregate Form class: mspp_weblink.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_weblink {

	// ========================================================================
	// Form: mspp_weblink_Information
	// ========================================================================

	export namespace mspp_weblink_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Description */
			mspp_description: DevKit.Controls.Memo;
			/** Description */
			mspp_description1: DevKit.Controls.Memo;
			/** Disable Page Validation */
			mspp_disablepagevalidation: DevKit.Controls.Boolean;
			/** Display Image Only */
			mspp_displayimageonly: DevKit.Controls.Boolean;
			/** Display Order */
			mspp_displayorder: DevKit.Controls.Integer;
			/** Select whether to display the children of the page as child links for this link. */
			mspp_displaypagechildlinks: DevKit.Controls.Boolean;
			/** External Url */
			mspp_externalurl: DevKit.Controls.String;
			/** Image Alt Text */
			mspp_imagealttext: DevKit.Controls.String;
			/** Image Height */
			mspp_imageheight: DevKit.Controls.Integer;
			/** Image Url */
			mspp_imageurl: DevKit.Controls.String;
			/** Image Width */
			mspp_imagewidth: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Open In New Window */
			mspp_openinnewwindow: DevKit.Controls.Boolean;
			/** Unique identifier for Web Page associated with Web Link. */
			mspp_pageid: DevKit.Controls.Lookup;
			/** Unique identifier for parent Web Link associated with Web Link. */
			mspp_parentweblinkid: DevKit.Controls.Lookup;
			/** Unique identifier for Publishing State associated with Web Link. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			/** Robots Follow Link */
			mspp_robotsfollowlink: DevKit.Controls.Boolean;
			/** Unique identifier for Web Link Set associated with Web Link. */
			mspp_weblinksetid: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_FB562B86_E39C_490E_B7B2_D7C53D363325TabSections {
			/** General */
			_5D983152_5327_4492_B286_B7446CF20F0D: DevKit.Controls.Section;
			/** Image Properties */
			_A5DB4708_AB02_DE11_BDF3_0003FF48C0DB: DevKit.Controls.Section;
			/** Link Options */
			_FB562B86_E39C_490E_B7B2_D7C53D363325_SECTION_3: DevKit.Controls.Section;
			/** Description (HTML) */
			mspp_weblink_description_monacoEditor: DevKit.Controls.Section;
		}

		/** General */
		export interface I_FB562B86_E39C_490E_B7B2_D7C53D363325Tab extends DevKit.Controls.ITab {
			Section: I_FB562B86_E39C_490E_B7B2_D7C53D363325TabSections;
		}

		export interface ITabs {
			/** General */
			_FB562B86_E39C_490E_B7B2_D7C53D363325: I_FB562B86_E39C_490E_B7B2_D7C53D363325Tab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
		}

		/**
		 * Navigation interface
		 * Contains navigation items
		 */
		export interface INavigation {
		}

		/**
		 * QuickForm interface
		 * Contains quick view form controls
		 */
		export interface IQuickForm {
		}

		/**
		 * Process interface
		 * Contains business process flow definitions
		 */
		export interface IProcess extends DevKit.Controls.IProcess {
		}

		/**
		 * Dialog interface
		 * For quick create dialogs or other dialog forms
		 */
		export interface IDialog extends DevKit.IDialog {
		}
	}

	/**
	 * mspp_weblink_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_weblink.mspp_weblink_Information(executionContext)
	 */
	export class mspp_weblink_Information extends FormBase<mspp_weblink_Information.IBody, mspp_weblink_Information.IHeader, mspp_weblink_Information.IGrid, mspp_weblink_Information.INavigation, mspp_weblink_Information.IQuickForm, mspp_weblink_Information.IProcess, mspp_weblink_Information.IDialog> {
		/**
		 * Creates a mspp_weblink_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_description', 'mspp_description1', 'mspp_disablepagevalidation', 'mspp_displayimageonly', 'mspp_displayorder', 'mspp_displaypagechildlinks', 'mspp_externalurl', 'mspp_imagealttext', 'mspp_imageheight', 'mspp_imageurl', 'mspp_imagewidth', 'mspp_name', 'mspp_openinnewwindow', 'mspp_pageid', 'mspp_parentweblinkid', 'mspp_publishingstateid', 'mspp_robotsfollowlink', 'mspp_weblinksetid'],
				header: [],
				tab: ['_FB562B86_E39C_490E_B7B2_D7C53D363325____5D983152_5327_4492_B286_B7446CF20F0D', '_FB562B86_E39C_490E_B7B2_D7C53D363325____A5DB4708_AB02_DE11_BDF3_0003FF48C0DB', '_FB562B86_E39C_490E_B7B2_D7C53D363325____FB562B86_E39C_490E_B7B2_D7C53D363325_SECTION_3', '_FB562B86_E39C_490E_B7B2_D7C53D363325___mspp_weblink_description_monacoEditor'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Aggregate Form: Form (contains all fields from all forms)
	// ========================================================================

	export namespace AllInOne {

		/**
		 * Aggregate Body controls interface
		 * Contains all controls from all forms on the entity
		 */
		export interface IBody {
			/** Description */
			mspp_description: DevKit.Controls.Memo;
			/** Description */
			mspp_description1: DevKit.Controls.Memo;
			/** Disable Page Validation */
			mspp_disablepagevalidation: DevKit.Controls.Boolean;
			/** Display Image Only */
			mspp_displayimageonly: DevKit.Controls.Boolean;
			/** Display Order */
			mspp_displayorder: DevKit.Controls.Integer;
			/** Select whether to display the children of the page as child links for this link. */
			mspp_displaypagechildlinks: DevKit.Controls.Boolean;
			/** External Url */
			mspp_externalurl: DevKit.Controls.String;
			/** Image Alt Text */
			mspp_imagealttext: DevKit.Controls.String;
			/** Image Height */
			mspp_imageheight: DevKit.Controls.Integer;
			/** Image Url */
			mspp_imageurl: DevKit.Controls.String;
			/** Image Width */
			mspp_imagewidth: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Open In New Window */
			mspp_openinnewwindow: DevKit.Controls.Boolean;
			/** Unique identifier for Web Page associated with Web Link. */
			mspp_pageid: DevKit.Controls.Lookup;
			/** Unique identifier for parent Web Link associated with Web Link. */
			mspp_parentweblinkid: DevKit.Controls.Lookup;
			/** Unique identifier for Publishing State associated with Web Link. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			/** Robots Follow Link */
			mspp_robotsfollowlink: DevKit.Controls.Boolean;
			/** Unique identifier for Web Link Set associated with Web Link. */
			mspp_weblinksetid: DevKit.Controls.Lookup;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		/**
		 * Aggregate Grid controls interface
		 */
		export interface IGrid {
		}

		/**
		 * Aggregate Navigation interface
		 */
		export interface INavigation {
		}

		/**
		 * Aggregate QuickForm interface
		 */
		export interface IQuickForm {
		}

		/**
		 * Aggregate Process interface
		 */
		export interface IProcess extends DevKit.Controls.IProcess {
		}

	}

	/**
	 * Aggregate Form class
	 * Contains all fields from all forms - useful when form type is unknown at compile time
	 * Usage: new mspp_weblink.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_weblink Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_description', 'mspp_description1', 'mspp_disablepagevalidation', 'mspp_displayimageonly', 'mspp_displayorder', 'mspp_displaypagechildlinks', 'mspp_externalurl', 'mspp_imagealttext', 'mspp_imageheight', 'mspp_imageurl', 'mspp_imagewidth', 'mspp_name', 'mspp_openinnewwindow', 'mspp_pageid', 'mspp_parentweblinkid', 'mspp_publishingstateid', 'mspp_robotsfollowlink', 'mspp_weblinksetid'],
				header: [],
				tab: ['{fb562b86-e39c-490e-b7b2-d7c53d363325}___{5d983152-5327-4492-b286-b7446cf20f0d}', '{fb562b86-e39c-490e-b7b2-d7c53d363325}___{a5db4708-ab02-de11-bdf3-0003ff48c0db}', '{fb562b86-e39c-490e-b7b2-d7c53d363325}___{fb562b86-e39c-490e-b7b2-d7c53d363325}_section_3', '{fb562b86-e39c-490e-b7b2-d7c53d363325}___mspp_weblink_description_monacoEditor'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
