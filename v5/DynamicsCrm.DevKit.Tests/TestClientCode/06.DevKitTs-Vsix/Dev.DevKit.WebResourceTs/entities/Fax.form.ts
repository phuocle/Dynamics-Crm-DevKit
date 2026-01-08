/**
 * Fax.form.ts - Fax Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Fax containing form classes: Fax.FormClassName
 * 3. Aggregate Form class: Fax.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Fax {

	// ========================================================================
	// Form: Fax
	// ========================================================================

	export namespace Fax {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type the number of minutes spent creating and sending the fax. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type additional information to describe the fax, such as the primary message or the products and services featured. */
			Description: DevKit.Controls.Memo;
			/** Select the direction of the fax as incoming or outbound. */
			DirectionCode: DevKit.Controls.Boolean;
			/** Type the recipient's fax number. */
			FaxNumber: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user who sent the fax. */
			from: DevKit.Controls.Lookup;
			/** Choose the record that the fax relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the fax. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the fax. */
			to: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the fax activity is open, completed, or canceled. Completed and canceled fax activities are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}

		export interface ISUMMARY_TABTabSections {
			general_information: DevKit.Controls.Section;
			/** Description */
			Letter_description: DevKit.Controls.Section;
			/** Letter Details */
			Letter_details: DevKit.Controls.Section;
			/** Section */
			tab_2_section_2: DevKit.Controls.Section;
		}

		/** Summary */
		export interface ISUMMARY_TABTab extends DevKit.Controls.ITab {
			Section: ISUMMARY_TABTabSections;
		}

		export interface ITabs {
			/** Summary */
			SUMMARY_TAB: ISUMMARY_TABTab;
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
	 * Fax Form class
	 * Provides typed access to all form controls
	 * Usage: new Fax.Fax(executionContext)
	 */
	export class Fax extends FormBase<Fax.IBody, Fax.IHeader, Fax.IGrid, Fax.INavigation, Fax.IQuickForm, Fax.IProcess, Fax.IDialog> {
		/**
		 * Creates a Fax Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActualDurationMinutes', 'Description', 'DirectionCode', 'FaxNumber', 'from', 'RegardingObjectId', 'Subject', 'to'],
				header: ['OwnerId', 'PriorityCode', 'ScheduledEnd', 'StateCode'],
				tab: ['SUMMARY_TAB___general_information', 'SUMMARY_TAB___Letter_description', 'SUMMARY_TAB___Letter_details', 'SUMMARY_TAB___tab_2_section_2'],
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
			/** Type the number of minutes spent creating and sending the fax. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type additional information to describe the fax, such as the primary message or the products and services featured. */
			Description: DevKit.Controls.Memo;
			/** Select the direction of the fax as incoming or outbound. */
			DirectionCode: DevKit.Controls.Boolean;
			/** Type the recipient's fax number. */
			FaxNumber: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user who sent the fax. */
			from: DevKit.Controls.Lookup;
			/** Choose the record that the fax relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the fax. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the fax. */
			to: DevKit.Controls.Lookup;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the fax activity is open, completed, or canceled. Completed and canceled fax activities are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
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
	 * Usage: new Fax.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Fax Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActualDurationMinutes', 'Description', 'DirectionCode', 'FaxNumber', 'from', 'RegardingObjectId', 'Subject', 'to'],
				header: ['OwnerId', 'PriorityCode', 'ScheduledEnd', 'StateCode'],
				tab: ['SUMMARY_TAB___general information', 'SUMMARY_TAB___Letter description', 'SUMMARY_TAB___Letter details', 'SUMMARY_TAB___tab_2_section_2'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
