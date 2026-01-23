/**
 * AsyncOperation.form.ts - AsyncOperation Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace AsyncOperation containing form classes: AsyncOperation.FormClassName
 * 3. Aggregate Form class: AsyncOperation.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace AsyncOperation {

	// ========================================================================
	// Form: AsyncOperation_Information
	// ========================================================================

	export namespace AsyncOperation_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Date and time when the system job was completed. */
			CompletedOn: DevKit.Controls.DateTime;
			/** Date and time when the system job was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Message provided by the system job. */
			FriendlyMessage: DevKit.Controls.Memo;
			/** Message related to the system job. */
			Message: DevKit.Controls.Memo;
			/** Name of the system job. */
			Name: DevKit.Controls.String;
			/** Type of the system job. */
			OperationType: DevKit.Controls.OptionSet;
			/** Unique identifier of the user or team who owns the system job. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the system job is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Number of times to retry the system job. */
			RetryCount: DevKit.Controls.Integer;
			WebResource_systemjob: DevKit.Controls.WebResource;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneraltabTabSections {
			/** Custom */
			custom: DevKit.Controls.Section;
			/** General */
			general: DevKit.Controls.Section;
			systemlinksection: DevKit.Controls.Section;
		}

		/** General */
		export interface IgeneraltabTab extends DevKit.Controls.ITab {
			Section: IgeneraltabTabSections;
		}

		export interface ITabs {
			/** General */
			generaltab: IgeneraltabTab;
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
	 * AsyncOperation_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new AsyncOperation.AsyncOperation_Information(executionContext)
	 */
	export class AsyncOperation_Information extends FormBase<AsyncOperation_Information.IBody, AsyncOperation_Information.IHeader, AsyncOperation_Information.IGrid, AsyncOperation_Information.INavigation, AsyncOperation_Information.IQuickForm, AsyncOperation_Information.IProcess, AsyncOperation_Information.IDialog> {
		/**
		 * Creates a AsyncOperation_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CompletedOn', 'CreatedOn', 'FriendlyMessage', 'Message', 'Name', 'OperationType', 'OwnerId', 'RegardingObjectId', 'RetryCount', 'WebResource_systemjob'],
				header: [],
				tab: ['generaltab___custom', 'generaltab___general', 'generaltab___systemlinksection'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: New_Bulk_Cancel_Job_form
	// ========================================================================

	export namespace New_Bulk_Cancel_Job_form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			_14EE90DC_D6B1_4CF2_B39F_4B978B7DE7A0: DevKit.Controls.ActionCards;
			/** Type of the system job. */
			OperationType: DevKit.Controls.OptionSet;
			/** Unique identifier of the object with which the system job is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IGENERAL_NEW_BULK_JOB_TABTabSections {
			/** Custom */
			custom: DevKit.Controls.Section;
			/** General */
			general: DevKit.Controls.Section;
		}

		export interface IMODERN_NEW_JOB_TABTabSections {
			NEW_BULK_CANCEL_JOB: DevKit.Controls.Section;
		}

		/** General */
		export interface IGENERAL_NEW_BULK_JOB_TABTab extends DevKit.Controls.ITab {
			Section: IGENERAL_NEW_BULK_JOB_TABTabSections;
		}

		/** New job */
		export interface IMODERN_NEW_JOB_TABTab extends DevKit.Controls.ITab {
			Section: IMODERN_NEW_JOB_TABTabSections;
		}

		export interface ITabs {
			/** General */
			GENERAL_NEW_BULK_JOB_TAB: IGENERAL_NEW_BULK_JOB_TABTab;
			/** New job */
			MODERN_NEW_JOB_TAB: IMODERN_NEW_JOB_TABTab;
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
	 * New_Bulk_Cancel_Job_form Form class
	 * Provides typed access to all form controls
	 * Usage: new AsyncOperation.New_Bulk_Cancel_Job_form(executionContext)
	 */
	export class New_Bulk_Cancel_Job_form extends FormBase<New_Bulk_Cancel_Job_form.IBody, New_Bulk_Cancel_Job_form.IHeader, New_Bulk_Cancel_Job_form.IGrid, New_Bulk_Cancel_Job_form.INavigation, New_Bulk_Cancel_Job_form.IQuickForm, New_Bulk_Cancel_Job_form.IProcess, New_Bulk_Cancel_Job_form.IDialog> {
		/**
		 * Creates a New_Bulk_Cancel_Job_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['_14EE90DC_D6B1_4CF2_B39F_4B978B7DE7A0', 'OperationType', 'RegardingObjectId'],
				header: [],
				tab: ['GENERAL_NEW_BULK_JOB_TAB___custom', 'GENERAL_NEW_BULK_JOB_TAB___general', 'MODERN_NEW_JOB_TAB___NEW_BULK_CANCEL_JOB'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: New_Bulk_Pause_Job_form
	// ========================================================================

	export namespace New_Bulk_Pause_Job_form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			_01392873_0F90_41FE_83E7_430CF3443A8B: DevKit.Controls.ActionCards;
			/** Type of the system job. */
			OperationType: DevKit.Controls.OptionSet;
			/** Unique identifier of the object with which the system job is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IGENERAL_NEW_BULK_JOB_TABTabSections {
			/** Custom */
			custom: DevKit.Controls.Section;
			/** General */
			general: DevKit.Controls.Section;
		}

		export interface IMODERN_NEW_JOB_TABTabSections {
			NEW_BULK_PAUSE_JOB: DevKit.Controls.Section;
		}

		/** General */
		export interface IGENERAL_NEW_BULK_JOB_TABTab extends DevKit.Controls.ITab {
			Section: IGENERAL_NEW_BULK_JOB_TABTabSections;
		}

		/** New job */
		export interface IMODERN_NEW_JOB_TABTab extends DevKit.Controls.ITab {
			Section: IMODERN_NEW_JOB_TABTabSections;
		}

		export interface ITabs {
			/** General */
			GENERAL_NEW_BULK_JOB_TAB: IGENERAL_NEW_BULK_JOB_TABTab;
			/** New job */
			MODERN_NEW_JOB_TAB: IMODERN_NEW_JOB_TABTab;
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
	 * New_Bulk_Pause_Job_form Form class
	 * Provides typed access to all form controls
	 * Usage: new AsyncOperation.New_Bulk_Pause_Job_form(executionContext)
	 */
	export class New_Bulk_Pause_Job_form extends FormBase<New_Bulk_Pause_Job_form.IBody, New_Bulk_Pause_Job_form.IHeader, New_Bulk_Pause_Job_form.IGrid, New_Bulk_Pause_Job_form.INavigation, New_Bulk_Pause_Job_form.IQuickForm, New_Bulk_Pause_Job_form.IProcess, New_Bulk_Pause_Job_form.IDialog> {
		/**
		 * Creates a New_Bulk_Pause_Job_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['_01392873_0F90_41FE_83E7_430CF3443A8B', 'OperationType', 'RegardingObjectId'],
				header: [],
				tab: ['GENERAL_NEW_BULK_JOB_TAB___custom', 'GENERAL_NEW_BULK_JOB_TAB___general', 'MODERN_NEW_JOB_TAB___NEW_BULK_PAUSE_JOB'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: New_Bulk_Resume_Job_form
	// ========================================================================

	export namespace New_Bulk_Resume_Job_form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			_CDE1C43F_D8D5_4A1D_9FF0_5F6D52F56FD9: DevKit.Controls.ActionCards;
			/** Type of the system job. */
			OperationType: DevKit.Controls.OptionSet;
			/** Unique identifier of the object with which the system job is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IGENERAL_NEW_BULK_JOB_TABTabSections {
			/** Custom */
			custom: DevKit.Controls.Section;
			/** General */
			general: DevKit.Controls.Section;
		}

		export interface IMODERN_NEW_JOB_TABTabSections {
			NEW_BULK_RESUME_JOB: DevKit.Controls.Section;
		}

		/** General */
		export interface IGENERAL_NEW_BULK_JOB_TABTab extends DevKit.Controls.ITab {
			Section: IGENERAL_NEW_BULK_JOB_TABTabSections;
		}

		/** New job */
		export interface IMODERN_NEW_JOB_TABTab extends DevKit.Controls.ITab {
			Section: IMODERN_NEW_JOB_TABTabSections;
		}

		export interface ITabs {
			/** General */
			GENERAL_NEW_BULK_JOB_TAB: IGENERAL_NEW_BULK_JOB_TABTab;
			/** New job */
			MODERN_NEW_JOB_TAB: IMODERN_NEW_JOB_TABTab;
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
	 * New_Bulk_Resume_Job_form Form class
	 * Provides typed access to all form controls
	 * Usage: new AsyncOperation.New_Bulk_Resume_Job_form(executionContext)
	 */
	export class New_Bulk_Resume_Job_form extends FormBase<New_Bulk_Resume_Job_form.IBody, New_Bulk_Resume_Job_form.IHeader, New_Bulk_Resume_Job_form.IGrid, New_Bulk_Resume_Job_form.INavigation, New_Bulk_Resume_Job_form.IQuickForm, New_Bulk_Resume_Job_form.IProcess, New_Bulk_Resume_Job_form.IDialog> {
		/**
		 * Creates a New_Bulk_Resume_Job_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['_CDE1C43F_D8D5_4A1D_9FF0_5F6D52F56FD9', 'OperationType', 'RegardingObjectId'],
				header: [],
				tab: ['GENERAL_NEW_BULK_JOB_TAB___custom', 'GENERAL_NEW_BULK_JOB_TAB___general', 'MODERN_NEW_JOB_TAB___NEW_BULK_RESUME_JOB'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: New_Duplicate_Detection_Job_form
	// ========================================================================

	export namespace New_Duplicate_Detection_Job_form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			_ED99F095_264A_41F9_98C8_086000F8E699: DevKit.Controls.ActionCards;
			/** Type of the system job. */
			OperationType: DevKit.Controls.OptionSet;
			/** Unique identifier of the object with which the system job is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IGENERAL_NEW_BULK_JOB_TABTabSections {
			/** Custom */
			custom: DevKit.Controls.Section;
			/** General */
			general: DevKit.Controls.Section;
		}

		export interface IMODERN_NEW_JOB_TABTabSections {
			/** ACCOUNT INFORMATION */
			NEW_DUPLICATE_DETECTION_JOB: DevKit.Controls.Section;
		}

		/** General */
		export interface IGENERAL_NEW_BULK_JOB_TABTab extends DevKit.Controls.ITab {
			Section: IGENERAL_NEW_BULK_JOB_TABTabSections;
		}

		/** New job */
		export interface IMODERN_NEW_JOB_TABTab extends DevKit.Controls.ITab {
			Section: IMODERN_NEW_JOB_TABTabSections;
		}

		export interface ITabs {
			/** General */
			GENERAL_NEW_BULK_JOB_TAB: IGENERAL_NEW_BULK_JOB_TABTab;
			/** New job */
			MODERN_NEW_JOB_TAB: IMODERN_NEW_JOB_TABTab;
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
	 * New_Duplicate_Detection_Job_form Form class
	 * Provides typed access to all form controls
	 * Usage: new AsyncOperation.New_Duplicate_Detection_Job_form(executionContext)
	 */
	export class New_Duplicate_Detection_Job_form extends FormBase<New_Duplicate_Detection_Job_form.IBody, New_Duplicate_Detection_Job_form.IHeader, New_Duplicate_Detection_Job_form.IGrid, New_Duplicate_Detection_Job_form.INavigation, New_Duplicate_Detection_Job_form.IQuickForm, New_Duplicate_Detection_Job_form.IProcess, New_Duplicate_Detection_Job_form.IDialog> {
		/**
		 * Creates a New_Duplicate_Detection_Job_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['_ED99F095_264A_41F9_98C8_086000F8E699', 'OperationType', 'RegardingObjectId'],
				header: [],
				tab: ['GENERAL_NEW_BULK_JOB_TAB___custom', 'GENERAL_NEW_BULK_JOB_TAB___general', 'MODERN_NEW_JOB_TAB___NEW_DUPLICATE_DETECTION_JOB'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: View_Duplicate_Detection_Job_details_form
	// ========================================================================

	export namespace View_Duplicate_Detection_Job_details_form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			_4E64B996_F144_4D9A_8678_AD4FAD663383: DevKit.Controls.ActionCards;
			_D9EC5B3F_6E0A_46D6_B1CD_C951D4F0A5ED: DevKit.Controls.ActionCards;
			/** Date and time when the system job was completed. */
			CompletedOn: DevKit.Controls.DateTime;
			/** Date and time when the system job was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Message provided by the system job. */
			FriendlyMessage: DevKit.Controls.Memo;
			/** Message related to the system job. */
			Message: DevKit.Controls.Memo;
			/** Name of the system job. */
			Name: DevKit.Controls.String;
			/** Type of the system job. */
			OperationType: DevKit.Controls.OptionSet;
			/** Unique identifier of the user or team who owns the system job. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the system job is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Number of times to retry the system job. */
			RetryCount: DevKit.Controls.Integer;
			WebResource_systemjob: DevKit.Controls.WebResource;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface ILEGACY_DETAILS_TABTabSections {
			/** Message */
			Message: DevKit.Controls.Section;
		}

		export interface ILEGACY_GENERAL_TABTabSections {
			/** Custom */
			custom: DevKit.Controls.Section;
			/** General */
			general: DevKit.Controls.Section;
			systemlinksection: DevKit.Controls.Section;
		}

		export interface IMODERN_DELETED_RECORDS_TABTabSections {
			tab_3_section_1: DevKit.Controls.Section;
		}

		export interface IMODERN_DETAILS_TABTabSections {
			VIEW_DUPLICATE_DETECTION_JOB: DevKit.Controls.Section;
		}

		export interface IMODERN_VIEW_DUPLICATES_TABTabSections {
			VIEW_DUPLICATES_DUPLICATE_DETECTION_JOB: DevKit.Controls.Section;
		}

		/** Details */
		export interface ILEGACY_DETAILS_TABTab extends DevKit.Controls.ITab {
			Section: ILEGACY_DETAILS_TABTabSections;
		}

		/** General */
		export interface ILEGACY_GENERAL_TABTab extends DevKit.Controls.ITab {
			Section: ILEGACY_GENERAL_TABTabSections;
		}

		/** Deleted Records */
		export interface IMODERN_DELETED_RECORDS_TABTab extends DevKit.Controls.ITab {
			Section: IMODERN_DELETED_RECORDS_TABTabSections;
		}

		/** Details */
		export interface IMODERN_DETAILS_TABTab extends DevKit.Controls.ITab {
			Section: IMODERN_DETAILS_TABTabSections;
		}

		/** View Duplicates */
		export interface IMODERN_VIEW_DUPLICATES_TABTab extends DevKit.Controls.ITab {
			Section: IMODERN_VIEW_DUPLICATES_TABTabSections;
		}

		export interface ITabs {
			/** Details */
			LEGACY_DETAILS_TAB: ILEGACY_DETAILS_TABTab;
			/** General */
			LEGACY_GENERAL_TAB: ILEGACY_GENERAL_TABTab;
			/** Deleted Records */
			MODERN_DELETED_RECORDS_TAB: IMODERN_DELETED_RECORDS_TABTab;
			/** Details */
			MODERN_DETAILS_TAB: IMODERN_DETAILS_TABTab;
			/** View Duplicates */
			MODERN_VIEW_DUPLICATES_TAB: IMODERN_VIEW_DUPLICATES_TABTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Deleted Record References */
			Subgrid_new_1: DevKit.Controls.Grid;
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
	 * View_Duplicate_Detection_Job_details_form Form class
	 * Provides typed access to all form controls
	 * Usage: new AsyncOperation.View_Duplicate_Detection_Job_details_form(executionContext)
	 */
	export class View_Duplicate_Detection_Job_details_form extends FormBase<View_Duplicate_Detection_Job_details_form.IBody, View_Duplicate_Detection_Job_details_form.IHeader, View_Duplicate_Detection_Job_details_form.IGrid, View_Duplicate_Detection_Job_details_form.INavigation, View_Duplicate_Detection_Job_details_form.IQuickForm, View_Duplicate_Detection_Job_details_form.IProcess, View_Duplicate_Detection_Job_details_form.IDialog> {
		/**
		 * Creates a View_Duplicate_Detection_Job_details_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['_4E64B996_F144_4D9A_8678_AD4FAD663383', '_D9EC5B3F_6E0A_46D6_B1CD_C951D4F0A5ED', 'CompletedOn', 'CreatedOn', 'FriendlyMessage', 'Message', 'Name', 'OperationType', 'OwnerId', 'RegardingObjectId', 'RetryCount', 'WebResource_systemjob'],
				header: [],
				tab: ['LEGACY_DETAILS_TAB___Message', 'LEGACY_GENERAL_TAB___custom', 'LEGACY_GENERAL_TAB___general', 'LEGACY_GENERAL_TAB___systemlinksection', 'MODERN_DELETED_RECORDS_TAB___tab_3_section_1', 'MODERN_DETAILS_TAB___VIEW_DUPLICATE_DETECTION_JOB', 'MODERN_VIEW_DUPLICATES_TAB___VIEW_DUPLICATES_DUPLICATE_DETECTION_JOB'],
				grid: ['Subgrid_new_1'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: View_Job_Details
	// ========================================================================

	export namespace View_Job_Details {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			_4E64B996_F144_4D9A_8678_AD4FAD663383: DevKit.Controls.ActionCards;
			/** Date and time when the system job was completed. */
			CompletedOn: DevKit.Controls.DateTime;
			/** Date and time when the system job was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Message provided by the system job. */
			FriendlyMessage: DevKit.Controls.Memo;
			/** Message related to the system job. */
			Message: DevKit.Controls.Memo;
			/** Name of the system job. */
			Name: DevKit.Controls.String;
			/** Type of the system job. */
			OperationType: DevKit.Controls.OptionSet;
			/** Unique identifier of the user or team who owns the system job. */
			OwnerId: DevKit.Controls.Lookup;
			/** Indicates whether the system job should run only after the specified date and time. */
			PostponeUntil: DevKit.Controls.DateTime;
			/** Unique identifier of the object with which the system job is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Number of times to retry the system job. */
			RetryCount: DevKit.Controls.Integer;
			/** Status of the system job. */
			StateCode: DevKit.Controls.OptionSet;
			/** Reason for the status of the system job. */
			StatusCode: DevKit.Controls.OptionSet;
			WebResource_systemjob: DevKit.Controls.WebResource;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IMODERN_DELETED_RECORDS_TABTabSections {
			tab_3_section_1: DevKit.Controls.Section;
		}

		export interface IMODERN_DETAILS_TABTabSections {
			/** Message */
			Message: DevKit.Controls.Section;
		}

		export interface IMODERN_GENERAL_TABTabSections {
			/** Custom */
			custom: DevKit.Controls.Section;
			/** General */
			general: DevKit.Controls.Section;
			systemlinksection: DevKit.Controls.Section;
		}

		export interface IMODERN_VIEW_DUPLICATES_TABTabSections {
			VIEW_DUPLICATES_DUPLICATE_DETECTION_JOB: DevKit.Controls.Section;
		}

		/** Deleted Records */
		export interface IMODERN_DELETED_RECORDS_TABTab extends DevKit.Controls.ITab {
			Section: IMODERN_DELETED_RECORDS_TABTabSections;
		}

		/** Details */
		export interface IMODERN_DETAILS_TABTab extends DevKit.Controls.ITab {
			Section: IMODERN_DETAILS_TABTabSections;
		}

		/** General */
		export interface IMODERN_GENERAL_TABTab extends DevKit.Controls.ITab {
			Section: IMODERN_GENERAL_TABTabSections;
		}

		/** View Duplicates */
		export interface IMODERN_VIEW_DUPLICATES_TABTab extends DevKit.Controls.ITab {
			Section: IMODERN_VIEW_DUPLICATES_TABTabSections;
		}

		export interface ITabs {
			/** Deleted Records */
			MODERN_DELETED_RECORDS_TAB: IMODERN_DELETED_RECORDS_TABTab;
			/** Details */
			MODERN_DETAILS_TAB: IMODERN_DETAILS_TABTab;
			/** General */
			MODERN_GENERAL_TAB: IMODERN_GENERAL_TABTab;
			/** View Duplicates */
			MODERN_VIEW_DUPLICATES_TAB: IMODERN_VIEW_DUPLICATES_TABTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Deleted Record References */
			Subgrid_new_1: DevKit.Controls.Grid;
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
	 * View_Job_Details Form class
	 * Provides typed access to all form controls
	 * Usage: new AsyncOperation.View_Job_Details(executionContext)
	 */
	export class View_Job_Details extends FormBase<View_Job_Details.IBody, View_Job_Details.IHeader, View_Job_Details.IGrid, View_Job_Details.INavigation, View_Job_Details.IQuickForm, View_Job_Details.IProcess, View_Job_Details.IDialog> {
		/**
		 * Creates a View_Job_Details Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['_4E64B996_F144_4D9A_8678_AD4FAD663383', 'CompletedOn', 'CreatedOn', 'FriendlyMessage', 'Message', 'Name', 'OperationType', 'OwnerId', 'PostponeUntil', 'RegardingObjectId', 'RetryCount', 'StateCode', 'StatusCode', 'WebResource_systemjob'],
				header: [],
				tab: ['MODERN_DELETED_RECORDS_TAB___tab_3_section_1', 'MODERN_DETAILS_TAB___Message', 'MODERN_GENERAL_TAB___custom', 'MODERN_GENERAL_TAB___general', 'MODERN_GENERAL_TAB___systemlinksection', 'MODERN_VIEW_DUPLICATES_TAB___VIEW_DUPLICATES_DUPLICATE_DETECTION_JOB'],
				grid: ['Subgrid_new_1'],
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
			_01392873_0F90_41FE_83E7_430CF3443A8B: DevKit.Controls.ActionCards;
			_14EE90DC_D6B1_4CF2_B39F_4B978B7DE7A0: DevKit.Controls.ActionCards;
			_4E64B996_F144_4D9A_8678_AD4FAD663383: DevKit.Controls.ActionCards;
			_CDE1C43F_D8D5_4A1D_9FF0_5F6D52F56FD9: DevKit.Controls.ActionCards;
			_D9EC5B3F_6E0A_46D6_B1CD_C951D4F0A5ED: DevKit.Controls.ActionCards;
			_ED99F095_264A_41F9_98C8_086000F8E699: DevKit.Controls.ActionCards;
			/** Date and time when the system job was completed. */
			CompletedOn: DevKit.Controls.DateTime;
			/** Date and time when the system job was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Message provided by the system job. */
			FriendlyMessage: DevKit.Controls.Memo;
			/** Message related to the system job. */
			Message: DevKit.Controls.Memo;
			/** Name of the system job. */
			Name: DevKit.Controls.String;
			/** Type of the system job. */
			OperationType: DevKit.Controls.OptionSet;
			/** Unique identifier of the user or team who owns the system job. */
			OwnerId: DevKit.Controls.Lookup;
			/** Indicates whether the system job should run only after the specified date and time. */
			PostponeUntil: DevKit.Controls.DateTime;
			/** Unique identifier of the object with which the system job is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Number of times to retry the system job. */
			RetryCount: DevKit.Controls.Integer;
			/** Status of the system job. */
			StateCode: DevKit.Controls.OptionSet;
			/** Reason for the status of the system job. */
			StatusCode: DevKit.Controls.OptionSet;
			WebResource_systemjob: DevKit.Controls.WebResource;
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
			/** Deleted Record References */
			Subgrid_new_1: DevKit.Controls.Grid;
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
	 * Usage: new AsyncOperation.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate AsyncOperation Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['_01392873_0F90_41FE_83E7_430CF3443A8B', '_14EE90DC_D6B1_4CF2_B39F_4B978B7DE7A0', '_4E64B996_F144_4D9A_8678_AD4FAD663383', '_CDE1C43F_D8D5_4A1D_9FF0_5F6D52F56FD9', '_D9EC5B3F_6E0A_46D6_B1CD_C951D4F0A5ED', '_ED99F095_264A_41F9_98C8_086000F8E699', 'CompletedOn', 'CreatedOn', 'FriendlyMessage', 'Message', 'Name', 'OperationType', 'OwnerId', 'PostponeUntil', 'RegardingObjectId', 'RetryCount', 'StateCode', 'StatusCode', 'WebResource_systemjob'],
				header: [],
				tab: ['GENERAL_NEW_BULK_JOB_TAB___custom', 'GENERAL_NEW_BULK_JOB_TAB___general', 'generaltab___custom', 'generaltab___general', 'generaltab___systemlinksection', 'LEGACY_DETAILS_TAB___Message', 'LEGACY_GENERAL_TAB___custom', 'LEGACY_GENERAL_TAB___general', 'LEGACY_GENERAL_TAB___systemlinksection', 'MODERN_DELETED_RECORDS_TAB___tab_3_section_1', 'MODERN_DETAILS_TAB___Message', 'MODERN_DETAILS_TAB___VIEW_DUPLICATE_DETECTION_JOB', 'MODERN_GENERAL_TAB___custom', 'MODERN_GENERAL_TAB___general', 'MODERN_GENERAL_TAB___systemlinksection', 'MODERN_NEW_JOB_TAB___NEW_BULK_CANCEL_JOB', 'MODERN_NEW_JOB_TAB___NEW_BULK_PAUSE_JOB', 'MODERN_NEW_JOB_TAB___NEW_BULK_RESUME_JOB', 'MODERN_NEW_JOB_TAB___NEW_DUPLICATE_DETECTION_JOB', 'MODERN_VIEW_DUPLICATES_TAB___VIEW_DUPLICATES_DUPLICATE_DETECTION_JOB'],
				grid: ['Subgrid_new_1'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
