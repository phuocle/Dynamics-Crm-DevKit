/**
 * Fax.form.ts - Fax Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Types - IBody, IHeader, ITabs, IGrid, INavigation, IQuickForm, IProcess
 * 3. Runtime - Form class with field configurations
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

// ============================================================================
// 1. Types
// ============================================================================

export namespace FormFax {

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

	// ============================================================================
	// 2. Runtime - Form Class
	// ============================================================================

	/**
	 * Fax Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Fax Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'ActualDurationMinutes',
					'Description',
					'DirectionCode',
					'FaxNumber',
					'from',
					'RegardingObjectId',
					'Subject',
					'to'
				],
				header: [
					'OwnerId',
					'PriorityCode',
					'ScheduledEnd',
					'StateCode'
				],
				tab: [
					'SUMMARY_TAB___general_information',
					'SUMMARY_TAB___Letter_description',
					'SUMMARY_TAB___Letter_details',
					'SUMMARY_TAB___tab_2_section_2'
				],
				grid: [
					
				],
				navigation: [
					
				],
				quick: [
					
				],
				bpf: [
					
				],
				dialog: [
					
				]
			});
		}
	}
}

