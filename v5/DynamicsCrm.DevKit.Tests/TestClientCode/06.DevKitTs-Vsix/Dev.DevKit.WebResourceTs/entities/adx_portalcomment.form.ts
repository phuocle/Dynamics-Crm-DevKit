/**
 * adx_portalcomment.form.ts - adx_portalcomment Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace adx_portalcomment containing form classes: adx_portalcomment.FormClassName
 * 3. Aggregate Form class: adx_portalcomment.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace adx_portalcomment {

	// ========================================================================
	// Form: Portal_Comment
	// ========================================================================

	export namespace Portal_Comment {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Description of the activity. */
			Description: DevKit.Controls.Memo;
			/** Person who the activity is from. */
			From: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
			/** Person who is the receiver of the activity. */
			To: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Specifies whether the WebActivity created by Portal User or Dynamics 365 User. */
			adx_PortalCommentDirectionCode: DevKit.Controls.OptionSet;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Priority of the activity. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Reason for the status of the activity. */
			StatusCode: DevKit.Controls.OptionSet;
		}

		export interface I_54373510_FFDA_4801_B39B_1D305942D8D6TabSections {
			/** Web Activity description */
			_54373510_FFDA_4801_B39B_1D305942D8D6_SECTION_2: DevKit.Controls.Section;
			/** Section */
			_54373510_FFDA_4801_B39B_1D305942D8D6_SECTION_4: DevKit.Controls.Section;
		}

		/** General */
		export interface I_54373510_FFDA_4801_B39B_1D305942D8D6Tab extends DevKit.Controls.ITab {
			Section: I_54373510_FFDA_4801_B39B_1D305942D8D6TabSections;
		}

		export interface ITabs {
			/** General */
			_54373510_FFDA_4801_B39B_1D305942D8D6: I_54373510_FFDA_4801_B39B_1D305942D8D6Tab;
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
	 * Portal_Comment Form class
	 * Provides typed access to all form controls
	 * Usage: new adx_portalcomment.Portal_Comment(executionContext)
	 */
	export class Portal_Comment extends FormBase<Portal_Comment.IBody, Portal_Comment.IHeader, Portal_Comment.IGrid, Portal_Comment.INavigation, Portal_Comment.IQuickForm, Portal_Comment.IProcess, Portal_Comment.IDialog> {
		/**
		 * Creates a Portal_Comment Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'From', 'notescontrol', 'RegardingObjectId', 'Subject', 'To'],
				header: ['adx_PortalCommentDirectionCode', 'OwnerId', 'PriorityCode', 'StatusCode'],
				tab: ['_54373510_FFDA_4801_B39B_1D305942D8D6____54373510_FFDA_4801_B39B_1D305942D8D6_SECTION_2', '_54373510_FFDA_4801_B39B_1D305942D8D6____54373510_FFDA_4801_B39B_1D305942D8D6_SECTION_4'],
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
			/** Description of the activity. */
			Description: DevKit.Controls.Memo;
			/** Person who the activity is from. */
			From: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
			/** Person who is the receiver of the activity. */
			To: DevKit.Controls.Lookup;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Specifies whether the WebActivity created by Portal User or Dynamics 365 User. */
			adx_PortalCommentDirectionCode: DevKit.Controls.OptionSet;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Priority of the activity. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Reason for the status of the activity. */
			StatusCode: DevKit.Controls.OptionSet;
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
	 * Usage: new adx_portalcomment.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate adx_portalcomment Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'From', 'notescontrol', 'RegardingObjectId', 'Subject', 'To'],
				header: ['adx_PortalCommentDirectionCode', 'OwnerId', 'PriorityCode', 'StatusCode'],
				tab: ['{54373510-ffda-4801-b39b-1d305942d8d6}___{54373510-ffda-4801-b39b-1d305942d8d6}_section_2', '{54373510-ffda-4801-b39b-1d305942d8d6}___{54373510-ffda-4801-b39b-1d305942d8d6}_section_4'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
