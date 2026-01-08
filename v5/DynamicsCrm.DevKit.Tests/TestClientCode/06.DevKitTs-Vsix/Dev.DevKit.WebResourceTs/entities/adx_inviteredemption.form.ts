/**
 * adx_inviteredemption.form.ts - adx_inviteredemption Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace adx_inviteredemption containing form classes: adx_inviteredemption.FormClassName
 * 3. Aggregate Form class: adx_inviteredemption.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace adx_inviteredemption {

	// ========================================================================
	// Form: adx_inviteredemption_Information
	// ========================================================================

	export namespace adx_inviteredemption_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** IP Address */
			adx_ipAddress: DevKit.Controls.String;
			/** Shows the date and time when the activity was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Customer with which the activity is associated. */
			Customers: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Enter the user or team who is assigned to manage or maintain the activity. This field is updated every time the activity is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Select the activity's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}

		export interface I_BA71FD37_5DF2_4665_AE0C_1F0F30DB19A6TabSections {
			/** General */
			_171A0ADC_6B27_41FB_B31F_2D6C193677F1: DevKit.Controls.Section;
		}

		/** General */
		export interface I_BA71FD37_5DF2_4665_AE0C_1F0F30DB19A6Tab extends DevKit.Controls.ITab {
			Section: I_BA71FD37_5DF2_4665_AE0C_1F0F30DB19A6TabSections;
		}

		export interface ITabs {
			/** General */
			_BA71FD37_5DF2_4665_AE0C_1F0F30DB19A6: I_BA71FD37_5DF2_4665_AE0C_1F0F30DB19A6Tab;
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
	 * adx_inviteredemption_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new adx_inviteredemption.adx_inviteredemption_Information(executionContext)
	 */
	export class adx_inviteredemption_Information extends FormBase<adx_inviteredemption_Information.IBody, adx_inviteredemption_Information.IHeader, adx_inviteredemption_Information.IGrid, adx_inviteredemption_Information.INavigation, adx_inviteredemption_Information.IQuickForm, adx_inviteredemption_Information.IProcess, adx_inviteredemption_Information.IDialog> {
		/**
		 * Creates a adx_inviteredemption_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['adx_ipAddress', 'CreatedOn', 'Customers', 'notescontrol', 'OwnerId', 'RegardingObjectId', 'Subject'],
				header: ['StatusCode'],
				tab: ['_BA71FD37_5DF2_4665_AE0C_1F0F30DB19A6____171A0ADC_6B27_41FB_B31F_2D6C193677F1'],
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
			/** IP Address */
			adx_ipAddress: DevKit.Controls.String;
			/** Shows the date and time when the activity was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Customer with which the activity is associated. */
			Customers: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Enter the user or team who is assigned to manage or maintain the activity. This field is updated every time the activity is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Select the activity's status. */
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
	 * Usage: new adx_inviteredemption.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate adx_inviteredemption Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['adx_ipAddress', 'CreatedOn', 'Customers', 'notescontrol', 'OwnerId', 'RegardingObjectId', 'Subject'],
				header: ['StatusCode'],
				tab: ['{ba71fd37-5df2-4665-ae0c-1f0f30db19a6}___{171a0adc-6b27-41fb-b31f-2d6c193677f1}'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
