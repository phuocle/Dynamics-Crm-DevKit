/**
 * ConvertRule.form.ts - ConvertRule Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace ConvertRule containing form classes: ConvertRule.FormClassName
 * 3. Aggregate Form class: ConvertRule.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace ConvertRule {

	// ========================================================================
	// Form: Record_Creation_and_Update_Rule
	// ========================================================================

	export namespace Record_Creation_and_Update_Rule {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Choose whether items from unknown senders should be converted to records. */
			AllowUnknownSender: DevKit.Controls.Boolean;
			/** channel property group associated with the convert rule. */
			ChannelPropertyGroupId: DevKit.Controls.Lookup;
			/** Choose whether cases should be created for customers with active entitlements. */
			CheckActiveEntitlement: DevKit.Controls.Boolean;
			/** Information whether record needs to be created for black listed social profiles. */
			CheckBlockedSocialProfile: DevKit.Controls.Boolean;
			/** Information whether record needs to be created for direct messages. */
			CheckDirectMessages: DevKit.Controls.Boolean;
			/** Choose whether an item related to a resolved case should be converted to a case. */
			CheckIfResolved: DevKit.Controls.Boolean;
			/** Type a title or name of the queue for which the setting is defined. */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the queue that the rule is assigned to. */
			QueueId: DevKit.Controls.Lookup;
			/** If you want to create a new case for an item associated with a resolved case, type how long a case must remain resolved before a new case is created for the associated item. */
			ResolvedSince: DevKit.Controls.Integer;
			/** Choose the email template to use to create an automatic response to the customer. */
			ResponseTemplateId: DevKit.Controls.Lookup;
			/** Choose whether to send an automatic email response to the customer after a record is created. */
			SendAutomaticResponse: DevKit.Controls.Boolean;
			/** Identifies the Dynamics 365 activity that's the source of the record. */
			SourceChannelTypeCode: DevKit.Controls.String;
			/** Source of the record. */
			SourceTypeCode: DevKit.Controls.OptionSet;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** SPECIFY AUTORESPONSE SETTINGS */
			AutoResponseSettings: DevKit.Controls.Section;
			/** SPECIFY RECORD CREATION AND UPDATE DETAILS */
			CaseDetails: DevKit.Controls.Section;
			/** CHANNEL PROPERTIES */
			ChannelProperties: DevKit.Controls.Section;
			ConvertToCaseSettings: DevKit.Controls.Section;
			/** SPECIFY CONDITIONS FOR RECORD CREATION */
			EmailCaseConditions: DevKit.Controls.Section;
			/** SPECIFY CONDITIONS FOR RECORD CREATION */
			SocialMonitoringCaseConditions: DevKit.Controls.Section;
		}

		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		export interface ITabs {
			general: IgeneralTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** SPECIFY RECORD CREATION AND UPDATE DETAILS */
			ConvertRuleItemsGrid: DevKit.Controls.Grid;
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
	 * Record_Creation_and_Update_Rule Form class
	 * Provides typed access to all form controls
	 * Usage: new ConvertRule.Record_Creation_and_Update_Rule(executionContext)
	 */
	export class Record_Creation_and_Update_Rule extends FormBase<Record_Creation_and_Update_Rule.IBody, Record_Creation_and_Update_Rule.IHeader, Record_Creation_and_Update_Rule.IGrid, Record_Creation_and_Update_Rule.INavigation, Record_Creation_and_Update_Rule.IQuickForm, Record_Creation_and_Update_Rule.IProcess, Record_Creation_and_Update_Rule.IDialog> {
		/**
		 * Creates a Record_Creation_and_Update_Rule Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AllowUnknownSender', 'ChannelPropertyGroupId', 'CheckActiveEntitlement', 'CheckBlockedSocialProfile', 'CheckDirectMessages', 'CheckIfResolved', 'Name', 'OwnerId', 'QueueId', 'ResolvedSince', 'ResponseTemplateId', 'SendAutomaticResponse', 'SourceChannelTypeCode', 'SourceTypeCode'],
				header: [],
				tab: ['general___AutoResponseSettings', 'general___CaseDetails', 'general___ChannelProperties', 'general___ConvertToCaseSettings', 'general___EmailCaseConditions', 'general___SocialMonitoringCaseConditions'],
				grid: ['ConvertRuleItemsGrid'],
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
			/** Choose whether items from unknown senders should be converted to records. */
			AllowUnknownSender: DevKit.Controls.Boolean;
			/** channel property group associated with the convert rule. */
			ChannelPropertyGroupId: DevKit.Controls.Lookup;
			/** Choose whether cases should be created for customers with active entitlements. */
			CheckActiveEntitlement: DevKit.Controls.Boolean;
			/** Information whether record needs to be created for black listed social profiles. */
			CheckBlockedSocialProfile: DevKit.Controls.Boolean;
			/** Information whether record needs to be created for direct messages. */
			CheckDirectMessages: DevKit.Controls.Boolean;
			/** Choose whether an item related to a resolved case should be converted to a case. */
			CheckIfResolved: DevKit.Controls.Boolean;
			/** Type a title or name of the queue for which the setting is defined. */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the queue that the rule is assigned to. */
			QueueId: DevKit.Controls.Lookup;
			/** If you want to create a new case for an item associated with a resolved case, type how long a case must remain resolved before a new case is created for the associated item. */
			ResolvedSince: DevKit.Controls.Integer;
			/** Choose the email template to use to create an automatic response to the customer. */
			ResponseTemplateId: DevKit.Controls.Lookup;
			/** Choose whether to send an automatic email response to the customer after a record is created. */
			SendAutomaticResponse: DevKit.Controls.Boolean;
			/** Identifies the Dynamics 365 activity that's the source of the record. */
			SourceChannelTypeCode: DevKit.Controls.String;
			/** Source of the record. */
			SourceTypeCode: DevKit.Controls.OptionSet;
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
			/** SPECIFY RECORD CREATION AND UPDATE DETAILS */
			ConvertRuleItemsGrid: DevKit.Controls.Grid;
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
	 * Usage: new ConvertRule.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate ConvertRule Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AllowUnknownSender', 'ChannelPropertyGroupId', 'CheckActiveEntitlement', 'CheckBlockedSocialProfile', 'CheckDirectMessages', 'CheckIfResolved', 'Name', 'OwnerId', 'QueueId', 'ResolvedSince', 'ResponseTemplateId', 'SendAutomaticResponse', 'SourceChannelTypeCode', 'SourceTypeCode'],
				header: [],
				tab: ['general___AutoResponseSettings', 'general___CaseDetails', 'general___ChannelProperties', 'general___ConvertToCaseSettings', 'general___EmailCaseConditions', 'general___SocialMonitoringCaseConditions'],
				grid: ['ConvertRuleItemsGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}
