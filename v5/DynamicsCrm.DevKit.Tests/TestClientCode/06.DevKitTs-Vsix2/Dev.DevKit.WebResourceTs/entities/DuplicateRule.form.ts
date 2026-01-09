/**
 * DuplicateRule.form.ts - DuplicateRule Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace DuplicateRule containing form classes: DuplicateRule.FormClassName
 * 3. Aggregate Form class: DuplicateRule.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace DuplicateRule {

	// ========================================================================
	// Form: Duplicate_Detection_Rule_main_form
	// ========================================================================

	export namespace Duplicate_Detection_Rule_main_form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Record type of the record being evaluated for potential duplicates. */
			BaseEntityTypeCode: DevKit.Controls.OptionSet;
			/** Record type of the record being evaluated for potential duplicates. */
			BaseEntityTypeCode1: DevKit.Controls.OptionSet;
			/** Unique identifier of the user who created the duplicate detection rule. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Unique identifier of the user who created the duplicate detection rule. */
			CreatedBy1: DevKit.Controls.Lookup;
			/** Date and time when the duplicate detection rule was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Date and time when the duplicate detection rule was created. */
			CreatedOn1: DevKit.Controls.DateTime;
			/** Description of the duplicate detection rule. */
			Description: DevKit.Controls.String;
			/** Description of the duplicate detection rule. */
			Description1: DevKit.Controls.String;
			/** Determines whether to flag inactive records as duplicates */
			ExcludeInactiveRecords: DevKit.Controls.Boolean;
			/** Determines whether to flag inactive records as duplicates */
			ExcludeInactiveRecords1: DevKit.Controls.Boolean;
			/** Indicates if the operator is case-sensitive. */
			IsCaseSensitive: DevKit.Controls.Boolean;
			/** Indicates if the operator is case-sensitive. */
			IsCaseSensitive1: DevKit.Controls.Boolean;
			/** Record type of the records being evaluated as potential duplicates. */
			MatchingEntityTypeCode: DevKit.Controls.OptionSet;
			/** Record type of the records being evaluated as potential duplicates. */
			MatchingEntityTypeCode1: DevKit.Controls.OptionSet;
			/** Unique identifier of the user who last modified the duplicate detection rule. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Unique identifier of the user who last modified the duplicate detection rule. */
			ModifiedBy1: DevKit.Controls.Lookup;
			/** Date and time when the duplicate detection rule was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Date and time when the duplicate detection rule was last modified. */
			ModifiedOn1: DevKit.Controls.DateTime;
			/** Name of the duplicate detection rule. */
			Name: DevKit.Controls.String;
			/** Name of the duplicate detection rule. */
			Name1: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the user or team who owns the duplicate detection rule. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the user or team who owns the duplicate detection rule. */
			OwnerId1: DevKit.Controls.Lookup;
			ruleconditioncontrol: DevKit.Controls.IFrame;
			/** Reason for the status of the duplicate detection rule. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Reason for the status of the duplicate detection rule. */
			StatusCode1: DevKit.Controls.OptionSet;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IadministrationTabSections {
			/** Section 1 */
			section_1_2_6: DevKit.Controls.Section;
		}

		export interface Iadministration_legacyTabSections {
			/** Section 1 */
			section_1_2: DevKit.Controls.Section;
		}

		export interface InotesTabSections {
			/** Notes */
			notes_7: DevKit.Controls.Section;
		}

		export interface Inotes_legacyTabSections {
			/** Notes */
			notes: DevKit.Controls.Section;
		}

		export interface IruleTabSections {
			/** Duplicate Detection Rule Criteria */
			criteria_4: DevKit.Controls.Section;
			/** Duplicate Detection Rule Settings */
			Duplicate_Detection_Rule_Settings: DevKit.Controls.Section;
			/** You cannot customize the duplicate-detection rule criteria section. */
			Rule_Conditions_5: DevKit.Controls.Section;
			/** Section 1 */
			section_1_3: DevKit.Controls.Section;
		}

		export interface Irule_legacyTabSections {
			/** Duplicate Detection Rule Criteria */
			criteria: DevKit.Controls.Section;
			/** Description */
			description: DevKit.Controls.Section;
			/** You cannot customize the duplicate-detection rule criteria section. */
			Rule_Conditions: DevKit.Controls.Section;
			/** Section 1 */
			section_1: DevKit.Controls.Section;
		}

		/** Administration */
		export interface IadministrationTab extends DevKit.Controls.ITab {
			Section: IadministrationTabSections;
		}

		/** Administration */
		export interface Iadministration_legacyTab extends DevKit.Controls.ITab {
			Section: Iadministration_legacyTabSections;
		}

		/** Notes */
		export interface InotesTab extends DevKit.Controls.ITab {
			Section: InotesTabSections;
		}

		/** Notes */
		export interface Inotes_legacyTab extends DevKit.Controls.ITab {
			Section: Inotes_legacyTabSections;
		}

		/** General */
		export interface IruleTab extends DevKit.Controls.ITab {
			Section: IruleTabSections;
		}

		/** General */
		export interface Irule_legacyTab extends DevKit.Controls.ITab {
			Section: Irule_legacyTabSections;
		}

		export interface ITabs {
			/** Administration */
			administration: IadministrationTab;
			/** Administration */
			administration_legacy: Iadministration_legacyTab;
			/** Notes */
			notes: InotesTab;
			/** Notes */
			notes_legacy: Inotes_legacyTab;
			/** General */
			rule: IruleTab;
			/** General */
			rule_legacy: Irule_legacyTab;
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
	 * Duplicate_Detection_Rule_main_form Form class
	 * Provides typed access to all form controls
	 * Usage: new DuplicateRule.Duplicate_Detection_Rule_main_form(executionContext)
	 */
	export class Duplicate_Detection_Rule_main_form extends FormBase<Duplicate_Detection_Rule_main_form.IBody, Duplicate_Detection_Rule_main_form.IHeader, Duplicate_Detection_Rule_main_form.IGrid, Duplicate_Detection_Rule_main_form.INavigation, Duplicate_Detection_Rule_main_form.IQuickForm, Duplicate_Detection_Rule_main_form.IProcess, Duplicate_Detection_Rule_main_form.IDialog> {
		/**
		 * Creates a Duplicate_Detection_Rule_main_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['BaseEntityTypeCode', 'BaseEntityTypeCode1', 'CreatedBy', 'CreatedBy1', 'CreatedOn', 'CreatedOn1', 'Description', 'Description1', 'ExcludeInactiveRecords', 'ExcludeInactiveRecords1', 'IsCaseSensitive', 'IsCaseSensitive1', 'MatchingEntityTypeCode', 'MatchingEntityTypeCode1', 'ModifiedBy', 'ModifiedBy1', 'ModifiedOn', 'ModifiedOn1', 'Name', 'Name1', 'notescontrol', 'OwnerId', 'OwnerId1', 'ruleconditioncontrol', 'StatusCode', 'StatusCode1'],
				header: [],
				tab: ['administration___section_1_2_6', 'administration_legacy___section_1_2', 'notes___notes_7', 'notes_legacy___notes', 'rule___criteria_4', 'rule___Duplicate_Detection_Rule_Settings', 'rule___Rule_Conditions_5', 'rule___section_1_3', 'rule_legacy___criteria', 'rule_legacy___description', 'rule_legacy___Rule_Conditions', 'rule_legacy___section_1'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: DuplicateRule_Information
	// ========================================================================

	export namespace DuplicateRule_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Record type of the record being evaluated for potential duplicates. */
			BaseEntityTypeCode: DevKit.Controls.OptionSet;
			/** Unique identifier of the user who created the duplicate detection rule. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the duplicate detection rule was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Description of the duplicate detection rule. */
			Description: DevKit.Controls.String;
			/** Determines whether to flag inactive records as duplicates */
			ExcludeInactiveRecords: DevKit.Controls.Boolean;
			/** Indicates if the operator is case-sensitive. */
			IsCaseSensitive: DevKit.Controls.Boolean;
			/** Record type of the records being evaluated as potential duplicates. */
			MatchingEntityTypeCode: DevKit.Controls.OptionSet;
			/** Unique identifier of the user who last modified the duplicate detection rule. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the duplicate detection rule was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Name of the duplicate detection rule. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the user or team who owns the duplicate detection rule. */
			OwnerId: DevKit.Controls.Lookup;
			ruleconditioncontrol: DevKit.Controls.IFrame;
			/** Reason for the status of the duplicate detection rule. */
			StatusCode: DevKit.Controls.OptionSet;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IadministrationTabSections {
			/** Section 1 */
			section_1_2: DevKit.Controls.Section;
		}

		export interface InotesTabSections {
			/** Notes */
			notes: DevKit.Controls.Section;
		}

		export interface IruleTabSections {
			/** Duplicate Detection Rule Criteria */
			criteria: DevKit.Controls.Section;
			/** Description */
			description: DevKit.Controls.Section;
			/** You cannot customize the duplicate-detection rule criteria section. */
			Rule_Conditions: DevKit.Controls.Section;
			/** Section 1 */
			section_1: DevKit.Controls.Section;
		}

		/** Administration */
		export interface IadministrationTab extends DevKit.Controls.ITab {
			Section: IadministrationTabSections;
		}

		/** Notes */
		export interface InotesTab extends DevKit.Controls.ITab {
			Section: InotesTabSections;
		}

		/** General */
		export interface IruleTab extends DevKit.Controls.ITab {
			Section: IruleTabSections;
		}

		export interface ITabs {
			/** Administration */
			administration: IadministrationTab;
			/** Notes */
			notes: InotesTab;
			/** General */
			rule: IruleTab;
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
	 * DuplicateRule_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new DuplicateRule.DuplicateRule_Information(executionContext)
	 */
	export class DuplicateRule_Information extends FormBase<DuplicateRule_Information.IBody, DuplicateRule_Information.IHeader, DuplicateRule_Information.IGrid, DuplicateRule_Information.INavigation, DuplicateRule_Information.IQuickForm, DuplicateRule_Information.IProcess, DuplicateRule_Information.IDialog> {
		/**
		 * Creates a DuplicateRule_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['BaseEntityTypeCode', 'CreatedBy', 'CreatedOn', 'Description', 'ExcludeInactiveRecords', 'IsCaseSensitive', 'MatchingEntityTypeCode', 'ModifiedBy', 'ModifiedOn', 'Name', 'notescontrol', 'OwnerId', 'ruleconditioncontrol', 'StatusCode'],
				header: [],
				tab: ['administration___section_1_2', 'notes___notes', 'rule___criteria', 'rule___description', 'rule___Rule_Conditions', 'rule___section_1'],
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
			/** Record type of the record being evaluated for potential duplicates. */
			BaseEntityTypeCode: DevKit.Controls.OptionSet;
			/** Record type of the record being evaluated for potential duplicates. */
			BaseEntityTypeCode1: DevKit.Controls.OptionSet;
			/** Unique identifier of the user who created the duplicate detection rule. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Unique identifier of the user who created the duplicate detection rule. */
			CreatedBy1: DevKit.Controls.Lookup;
			/** Date and time when the duplicate detection rule was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Date and time when the duplicate detection rule was created. */
			CreatedOn1: DevKit.Controls.DateTime;
			/** Description of the duplicate detection rule. */
			Description: DevKit.Controls.String;
			/** Description of the duplicate detection rule. */
			Description1: DevKit.Controls.String;
			/** Determines whether to flag inactive records as duplicates */
			ExcludeInactiveRecords: DevKit.Controls.Boolean;
			/** Determines whether to flag inactive records as duplicates */
			ExcludeInactiveRecords1: DevKit.Controls.Boolean;
			/** Indicates if the operator is case-sensitive. */
			IsCaseSensitive: DevKit.Controls.Boolean;
			/** Indicates if the operator is case-sensitive. */
			IsCaseSensitive1: DevKit.Controls.Boolean;
			/** Record type of the records being evaluated as potential duplicates. */
			MatchingEntityTypeCode: DevKit.Controls.OptionSet;
			/** Record type of the records being evaluated as potential duplicates. */
			MatchingEntityTypeCode1: DevKit.Controls.OptionSet;
			/** Unique identifier of the user who last modified the duplicate detection rule. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Unique identifier of the user who last modified the duplicate detection rule. */
			ModifiedBy1: DevKit.Controls.Lookup;
			/** Date and time when the duplicate detection rule was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Date and time when the duplicate detection rule was last modified. */
			ModifiedOn1: DevKit.Controls.DateTime;
			/** Name of the duplicate detection rule. */
			Name: DevKit.Controls.String;
			/** Name of the duplicate detection rule. */
			Name1: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the user or team who owns the duplicate detection rule. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the user or team who owns the duplicate detection rule. */
			OwnerId1: DevKit.Controls.Lookup;
			ruleconditioncontrol: DevKit.Controls.IFrame;
			/** Reason for the status of the duplicate detection rule. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Reason for the status of the duplicate detection rule. */
			StatusCode1: DevKit.Controls.OptionSet;
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
	 * Usage: new DuplicateRule.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate DuplicateRule Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['BaseEntityTypeCode', 'BaseEntityTypeCode1', 'CreatedBy', 'CreatedBy1', 'CreatedOn', 'CreatedOn1', 'Description', 'Description1', 'ExcludeInactiveRecords', 'ExcludeInactiveRecords1', 'IsCaseSensitive', 'IsCaseSensitive1', 'MatchingEntityTypeCode', 'MatchingEntityTypeCode1', 'ModifiedBy', 'ModifiedBy1', 'ModifiedOn', 'ModifiedOn1', 'Name', 'Name1', 'notescontrol', 'OwnerId', 'OwnerId1', 'ruleconditioncontrol', 'StatusCode', 'StatusCode1'],
				header: [],
				tab: ['administration___section 1_2', 'administration___section 1_2_6', 'administration_legacy___section 1_2', 'notes___notes', 'notes___notes_7', 'notes_legacy___notes', 'rule___criteria', 'rule___criteria_4', 'rule___description', 'rule___Duplicate Detection Rule Settings', 'rule___Rule Conditions', 'rule___Rule Conditions_5', 'rule___section 1', 'rule___section 1_3', 'rule_legacy___criteria', 'rule_legacy___description', 'rule_legacy___Rule Conditions', 'rule_legacy___section 1'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
