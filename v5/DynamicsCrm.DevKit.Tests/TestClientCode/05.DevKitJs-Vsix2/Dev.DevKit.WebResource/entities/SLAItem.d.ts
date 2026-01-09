//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSLAItem_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier for SLA associated with SLA Item. */
			SLAId: DevKit.Controls.Lookup;
		}
		interface tab_tabUC_Sections {
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
		interface tab_tabUC extends DevKit.Controls.ITab {
			Section: tab_tabUC_Sections;
		}
		interface Tabs {
			/** General */
			tabUC: tab_tabUC;
		}
		interface Body {
			Tab: Tabs;
			/** Action URL */
			ActionURL: DevKit.Controls.String;
			/** Custom Time Calculation Flag */
			msdyn_CustomTimeCalculation: DevKit.Controls.Boolean;
			/** Unique identifier for Custom Time Calculation Workflow associated with SLA Item. */
			msdyn_CustomTimeCalculationWorkflowId: DevKit.Controls.Lookup;
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
	}
	export class FormSLAItem_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form SLAItem_Information */
		Body: DevKit.FormSLAItem_Information.Body;
		/** The Header section of form SLAItem_Information */
		Header: DevKit.FormSLAItem_Information.Header;
	}
	export class SLAItemApi {
		/**
		* DynamicsCrm.DevKit SLAItemApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		actionflowuniquename: string | null;
		/** Action URL */
		ActionURL: string | null;
		/** Select whether this SLA will allow pausing and resuming during the time calculation. */
		AllowPauseResume: boolean | null;
		ApplicableEntity: string | null;
		/** Condition for SLA item */
		ApplicableWhenXml: string | null;
		/** Choose the business hours for calculating SLA item timelines. */
		BusinessHoursId: string | null;
		ChangedAttributeList: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SLAItem.ComponentState | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Type additional information to describe the SLA Item */
		Description: string | null;
		/** Exchange rate between the currency associated with the SLA Item record and the base currency. */
		readonly ExchangeRate: number | null;
		/** Select how soon the success criteria must be met until the SLA item is considered failed and failure actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
		FailureAfter: number | null;
		/** For internal use only. */
		readonly IsManaged: boolean | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		msdyn_AdvancedPauseConfiguration: boolean | null;
		msdyn_CustomTimeCalculation: boolean | null;
		/** Unique identifier for Custom Time Calculation Workflow associated with SLA Item. */
		msdyn_CustomTimeCalculationWorkflowId: string | null;
		msdyn_PauseConfigurationXml: string | null;
		/** Unique identifier for SLAKPI associated with SLA Item. */
		msdyn_slakpiid: string | null;
		/** Type a descriptive name of the service level agreement (SLA) item. */
		Name: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Select the service level agreement (SLA) key performance indicator (KPI) that this SLA Item is created for. */
		RelatedField: string | null;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		SequenceNumber: number | null;
		/** Unique identifier for SLA associated with SLA Item. */
		SLAId: string | null;
		/** Unique identifier of the SLA Item. */
		SLAItemId: string | null;
		/** For internal use only. */
		readonly SLAItemIdUnique: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Condition for SLA item */
		SuccessConditionsXml: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Unique identifier of the currency associated with the SLA Item record. */
		readonly TransactionCurrencyId: string | null;
		/** Version number of the SLA Item. */
		readonly VersionNumber: number | null;
		/** Select how soon the success criteria must be met before warning actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
		WarnAfter: number | null;
		/** Workflow associated with the SLA Item. */
		WorkflowId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly actionflowuniquename: string;
			/** Action URL */
			readonly ActionURL: string;
			/** Select whether this SLA will allow pausing and resuming during the time calculation. */
			readonly AllowPauseResume: string;
			readonly ApplicableEntity: string;
			/** Condition for SLA item */
			readonly ApplicableWhenXml: string;
			/** Choose the business hours for calculating SLA item timelines. */
			readonly BusinessHoursId: string;
			readonly ChangedAttributeList: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information to describe the SLA Item */
			readonly Description: string;
			/** Exchange rate between the currency associated with the SLA Item record and the base currency. */
			readonly ExchangeRate: string;
			/** Select how soon the success criteria must be met until the SLA item is considered failed and failure actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			readonly FailureAfter: string;
			/** For internal use only. */
			readonly IsManaged: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_AdvancedPauseConfiguration: string;
			readonly msdyn_CustomTimeCalculation: string;
			/** Unique identifier for Custom Time Calculation Workflow associated with SLA Item. */
			readonly msdyn_CustomTimeCalculationWorkflowId: string;
			readonly msdyn_PauseConfigurationXml: string;
			/** Unique identifier for SLAKPI associated with SLA Item. */
			readonly msdyn_slakpiid: string;
			/** Type a descriptive name of the service level agreement (SLA) item. */
			readonly Name: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Select the service level agreement (SLA) key performance indicator (KPI) that this SLA Item is created for. */
			readonly RelatedField: string;
			/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
			readonly SequenceNumber: string;
			/** Unique identifier for SLA associated with SLA Item. */
			readonly SLAId: string;
			/** Unique identifier of the SLA Item. */
			readonly SLAItemId: string;
			/** For internal use only. */
			readonly SLAItemIdUnique: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Condition for SLA item */
			readonly SuccessConditionsXml: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Unique identifier of the currency associated with the SLA Item record. */
			readonly TransactionCurrencyId: string;
			/** Version number of the SLA Item. */
			readonly VersionNumber: string;
			/** Select how soon the success criteria must be met before warning actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			readonly WarnAfter: string;
			/** Workflow associated with the SLA Item. */
			readonly WorkflowId: string;
		}
	}
}
declare namespace OptionSet {
	namespace SLAItem {
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}