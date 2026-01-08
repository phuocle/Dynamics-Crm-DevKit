/**
 * ImportFile.form.ts - ImportFile Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace ImportFile containing form classes: ImportFile.FormClassName
 * 3. Aggregate Form class: ImportFile.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace ImportFile {

	// ========================================================================
	// Form: Importfile
	// ========================================================================

	export namespace Importfile {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Shows the date and time when the import associated with the import file was completed. */
			CompletedOn: DevKit.Controls.DateOnly;
			/** Shows who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Select whether duplicate-detection rules should be run against the import job. */
			EnableDuplicateDetection: DevKit.Controls.Boolean;
			/** Shows the number of records in the import file that cannot be imported. */
			FailureCount: DevKit.Controls.Integer;
			import_Logs_Failure: DevKit.Controls.ActionCards;
			import_Logs_Failures: DevKit.Controls.ActionCards;
			import_Logs_Succes: DevKit.Controls.ActionCards;
			/** Choose a data map to match the import file and its column headers with the record types and fields in Microsoft Dynamics 365. If the column headers in the file match the display names of the target fields in Microsoft Dynamics 365, we import the data automatically. If not, you can manually define matches during import. */
			ImportMapId: DevKit.Controls.Lookup;
			/** Shows the name of the import file. This name is based on the name of the uploaded file. */
			Name: DevKit.Controls.String;
			/** Shows the number of records in this file that had failures during the import. */
			PartialFailureCount: DevKit.Controls.Integer;
			/** Choose the user that the records created during the import job should be assigned to. */
			RecordsOwnerId: DevKit.Controls.Lookup;
			/** Shows the size of the import file, in kilobytes. */
			Size: DevKit.Controls.String;
			/** Shows the name of the data source file uploaded in the import job. */
			Source: DevKit.Controls.String;
			/** Shows the reason code that explains the import file's status to identify the stage of the import process, from parsing the data to completed. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Shows the number of records in the import file that are imported successfully. */
			SuccessCount: DevKit.Controls.Integer;
			/** Select the target record type (entity) for the records that will be created during the import job. */
			TargetEntityName: DevKit.Controls.String;
			/** Shows the total number of records in the import file. */
			TotalCount: DevKit.Controls.Integer;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IfailureTabTabSections {
			/** FailureSection */
			failureSection: DevKit.Controls.Section;
		}

		export interface IpartialFailureTabTabSections {
			/** PartialFailureSection */
			partialFailureSection: DevKit.Controls.Section;
		}

		export interface IsuccessTabTabSections {
			/** SuccessSection */
			successSection: DevKit.Controls.Section;
		}

		/** Failures */
		export interface IfailureTabTab extends DevKit.Controls.ITab {
			Section: IfailureTabTabSections;
		}

		/** Partial Failure */
		export interface IpartialFailureTabTab extends DevKit.Controls.ITab {
			Section: IpartialFailureTabTabSections;
		}

		/** Success */
		export interface IsuccessTabTab extends DevKit.Controls.ITab {
			Section: IsuccessTabTabSections;
		}

		export interface ITabs {
			/** Failures */
			failureTab: IfailureTabTab;
			/** Partial Failure */
			partialFailureTab: IpartialFailureTabTab;
			/** Success */
			successTab: IsuccessTabTab;
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
	 * Importfile Form class
	 * Provides typed access to all form controls
	 * Usage: new ImportFile.Importfile(executionContext)
	 */
	export class Importfile extends FormBase<Importfile.IBody, Importfile.IHeader, Importfile.IGrid, Importfile.INavigation, Importfile.IQuickForm, Importfile.IProcess, Importfile.IDialog> {
		/**
		 * Creates a Importfile Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CompletedOn', 'CreatedBy', 'CreatedOn', 'EnableDuplicateDetection', 'FailureCount', 'import_Logs_Failure', 'import_Logs_Failures', 'import_Logs_Succes', 'ImportMapId', 'Name', 'PartialFailureCount', 'RecordsOwnerId', 'Size', 'Source', 'StatusCode', 'SuccessCount', 'TargetEntityName', 'TotalCount'],
				header: [],
				tab: ['failureTab___failureSection', 'partialFailureTab___partialFailureSection', 'successTab___successSection'],
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
			/** Shows the date and time when the import associated with the import file was completed. */
			CompletedOn: DevKit.Controls.DateOnly;
			/** Shows who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Select whether duplicate-detection rules should be run against the import job. */
			EnableDuplicateDetection: DevKit.Controls.Boolean;
			/** Shows the number of records in the import file that cannot be imported. */
			FailureCount: DevKit.Controls.Integer;
			import_Logs_Failure: DevKit.Controls.ActionCards;
			import_Logs_Failures: DevKit.Controls.ActionCards;
			import_Logs_Succes: DevKit.Controls.ActionCards;
			/** Choose a data map to match the import file and its column headers with the record types and fields in Microsoft Dynamics 365. If the column headers in the file match the display names of the target fields in Microsoft Dynamics 365, we import the data automatically. If not, you can manually define matches during import. */
			ImportMapId: DevKit.Controls.Lookup;
			/** Shows the name of the import file. This name is based on the name of the uploaded file. */
			Name: DevKit.Controls.String;
			/** Shows the number of records in this file that had failures during the import. */
			PartialFailureCount: DevKit.Controls.Integer;
			/** Choose the user that the records created during the import job should be assigned to. */
			RecordsOwnerId: DevKit.Controls.Lookup;
			/** Shows the size of the import file, in kilobytes. */
			Size: DevKit.Controls.String;
			/** Shows the name of the data source file uploaded in the import job. */
			Source: DevKit.Controls.String;
			/** Shows the reason code that explains the import file's status to identify the stage of the import process, from parsing the data to completed. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Shows the number of records in the import file that are imported successfully. */
			SuccessCount: DevKit.Controls.Integer;
			/** Select the target record type (entity) for the records that will be created during the import job. */
			TargetEntityName: DevKit.Controls.String;
			/** Shows the total number of records in the import file. */
			TotalCount: DevKit.Controls.Integer;
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
	 * Usage: new ImportFile.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate ImportFile Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CompletedOn', 'CreatedBy', 'CreatedOn', 'EnableDuplicateDetection', 'FailureCount', 'import_Logs_Failure', 'import_Logs_Failures', 'import_Logs_Succes', 'ImportMapId', 'Name', 'PartialFailureCount', 'RecordsOwnerId', 'Size', 'Source', 'StatusCode', 'SuccessCount', 'TargetEntityName', 'TotalCount'],
				header: [],
				tab: ['failureTab___failureSection', 'partialFailureTab___partialFailureSection', 'successTab___successSection'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
