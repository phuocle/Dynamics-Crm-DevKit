/**
 * SLAItem.form.ts - SLAItem Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace SLAItem containing form classes: SLAItem.FormClassName
 * 3. Aggregate Form class: SLAItem.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace SLAItem {

	// ========================================================================
	// Form: SLAItem_Information
	// ========================================================================

	export namespace SLAItem_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Action URL */
			ActionURL: DevKit.Controls.String;
			/** Select whether this SLA will allow pausing and resuming during the time calculation. */
			AllowPauseResume: DevKit.Controls.Boolean;
			/** Applicable Entity */
			ApplicableEntity: DevKit.Controls.String;
			applicablewhencontrol: DevKit.Controls.ActionCards;
			/** Choose the business hours for calculating SLA item timelines. */
			BusinessHoursId: DevKit.Controls.Lookup;
			/** Select how soon the success criteria must be met until the SLA item is considered failed and failure actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			FailureAfter: DevKit.Controls.Integer;
			/** Select how soon the success criteria must be met until the SLA item is considered failed and failure actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			FailureAfter1: DevKit.Controls.Integer;
			/** Advanced Pause Configuration */
			msdyn_AdvancedPauseConfiguration: DevKit.Controls.Boolean;
			/** Custom Time Calculation Flag */
			msdyn_CustomTimeCalculation: DevKit.Controls.Boolean;
			/** Unique identifier for Custom Time Calculation Workflow associated with SLA Item. */
			msdyn_CustomTimeCalculationWorkflowId: DevKit.Controls.Lookup;
			/** PauseConfigurationXml */
			msdyn_pauseconfigurationxml: DevKit.Controls.ActionCards;
			/** Unique identifier for SLAKPI associated with SLA Item. */
			msdyn_slakpiid: DevKit.Controls.Lookup;
			/** Type a descriptive name of the service level agreement (SLA) item. */
			Name: DevKit.Controls.String;
			/** Type a descriptive name of the service level agreement (SLA) item. */
			Name1: DevKit.Controls.String;
			successconditioncontrol: DevKit.Controls.ActionCards;
			/** Select how soon the success criteria must be met before warning actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			WarnAfter: DevKit.Controls.Integer;
			/** Select how soon the success criteria must be met before warning actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			WarnAfter1: DevKit.Controls.Integer;
			WebResource_preview: DevKit.Controls.WebResource;
			WebResource_slaitem_applicablewhen_notification: DevKit.Controls.WebResource;
			WebResource_slaitem_success_notification: DevKit.Controls.WebResource;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Unique identifier for SLA associated with SLA Item. */
			SLAId: DevKit.Controls.Lookup;
		}

		export interface ItabUCTabSections {
			/** Actions */
			Actions: DevKit.Controls.Section;
			/** Applicable When */
			ApplicableWhen: DevKit.Controls.Section;
			/** Pause Configurations */
			PauseConfiguration: DevKit.Controls.Section;
			/** Success Conditions */
			SuccessConditions: DevKit.Controls.Section;
			/** Warn and Fail Duration */
			Warn_and_Fail_Duration: DevKit.Controls.Section;
		}

		/** General */
		export interface ItabUCTab extends DevKit.Controls.ITab {
			Section: ItabUCTabSections;
		}

		export interface ITabs {
			/** General */
			tabUC: ItabUCTab;
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
	 * SLAItem_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new SLAItem.SLAItem_Information(executionContext)
	 */
	export class SLAItem_Information extends FormBase<SLAItem_Information.IBody, SLAItem_Information.IHeader, SLAItem_Information.IGrid, SLAItem_Information.INavigation, SLAItem_Information.IQuickForm, SLAItem_Information.IProcess, SLAItem_Information.IDialog> {
		/**
		 * Creates a SLAItem_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActionURL', 'AllowPauseResume', 'ApplicableEntity', 'applicablewhencontrol', 'BusinessHoursId', 'FailureAfter', 'FailureAfter1', 'msdyn_AdvancedPauseConfiguration', 'msdyn_CustomTimeCalculation', 'msdyn_CustomTimeCalculationWorkflowId', 'msdyn_pauseconfigurationxml', 'msdyn_slakpiid', 'Name', 'Name1', 'successconditioncontrol', 'WarnAfter', 'WarnAfter1', 'WebResource_preview', 'WebResource_slaitem_applicablewhen_notification', 'WebResource_slaitem_success_notification'],
				header: ['SLAId'],
				tab: ['tabUC___Actions', 'tabUC___ApplicableWhen', 'tabUC___PauseConfiguration', 'tabUC___SuccessConditions', 'tabUC___Warn_and_Fail_Duration'],
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
			/** Action URL */
			ActionURL: DevKit.Controls.String;
			/** Select whether this SLA will allow pausing and resuming during the time calculation. */
			AllowPauseResume: DevKit.Controls.Boolean;
			/** Applicable Entity */
			ApplicableEntity: DevKit.Controls.String;
			applicablewhencontrol: DevKit.Controls.ActionCards;
			/** Choose the business hours for calculating SLA item timelines. */
			BusinessHoursId: DevKit.Controls.Lookup;
			/** Select how soon the success criteria must be met until the SLA item is considered failed and failure actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			FailureAfter: DevKit.Controls.Integer;
			/** Select how soon the success criteria must be met until the SLA item is considered failed and failure actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			FailureAfter1: DevKit.Controls.Integer;
			/** Advanced Pause Configuration */
			msdyn_AdvancedPauseConfiguration: DevKit.Controls.Boolean;
			/** Custom Time Calculation Flag */
			msdyn_CustomTimeCalculation: DevKit.Controls.Boolean;
			/** Unique identifier for Custom Time Calculation Workflow associated with SLA Item. */
			msdyn_CustomTimeCalculationWorkflowId: DevKit.Controls.Lookup;
			/** PauseConfigurationXml */
			msdyn_pauseconfigurationxml: DevKit.Controls.ActionCards;
			/** Unique identifier for SLAKPI associated with SLA Item. */
			msdyn_slakpiid: DevKit.Controls.Lookup;
			/** Type a descriptive name of the service level agreement (SLA) item. */
			Name: DevKit.Controls.String;
			/** Type a descriptive name of the service level agreement (SLA) item. */
			Name1: DevKit.Controls.String;
			successconditioncontrol: DevKit.Controls.ActionCards;
			/** Select how soon the success criteria must be met before warning actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			WarnAfter: DevKit.Controls.Integer;
			/** Select how soon the success criteria must be met before warning actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			WarnAfter1: DevKit.Controls.Integer;
			WebResource_preview: DevKit.Controls.WebResource;
			WebResource_slaitem_applicablewhen_notification: DevKit.Controls.WebResource;
			WebResource_slaitem_success_notification: DevKit.Controls.WebResource;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Unique identifier for SLA associated with SLA Item. */
			SLAId: DevKit.Controls.Lookup;
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
	 * Usage: new SLAItem.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate SLAItem Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActionURL', 'AllowPauseResume', 'ApplicableEntity', 'applicablewhencontrol', 'BusinessHoursId', 'FailureAfter', 'FailureAfter1', 'msdyn_AdvancedPauseConfiguration', 'msdyn_CustomTimeCalculation', 'msdyn_CustomTimeCalculationWorkflowId', 'msdyn_pauseconfigurationxml', 'msdyn_slakpiid', 'Name', 'Name1', 'successconditioncontrol', 'WarnAfter', 'WarnAfter1', 'WebResource_preview', 'WebResource_slaitem_applicablewhen_notification', 'WebResource_slaitem_success_notification'],
				header: ['SLAId'],
				tab: ['tabUC___Actions', 'tabUC___ApplicableWhen', 'tabUC___PauseConfiguration', 'tabUC___SuccessConditions', 'tabUC___Warn and Fail Duration'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
