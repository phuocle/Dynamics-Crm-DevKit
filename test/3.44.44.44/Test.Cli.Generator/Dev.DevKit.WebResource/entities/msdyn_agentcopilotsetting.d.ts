//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_agentcopilotsetting_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_agentassistenabled: DevKit.Controls.Boolean;
			msdyn_answerassistenabled: DevKit.Controls.Boolean;
			msdyn_companyscopeurls: DevKit.Controls.String;
			msdyn_copilotenabled: DevKit.Controls.Boolean;
			msdyn_emailassistenabled: DevKit.Controls.Boolean;
			msdyn_interactionsenabled: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_transcriptenabled: DevKit.Controls.Boolean;
			msdyn_useagentlanguage: DevKit.Controls.Boolean;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_agentcopilotsetting_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_agentcopilotsetting_Information */
		Body: DevKit.Formmsdyn_agentcopilotsetting_Information.Body;
		/** The Navigation of form msdyn_agentcopilotsetting_Information */
		Navigation: DevKit.Formmsdyn_agentcopilotsetting_Information.Navigation;
		/** The SidePanes of form msdyn_agentcopilotsetting_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_agentcopilotsettingApi {
		/**
		* DynamicsCrm.DevKit msdyn_agentcopilotsettingApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_agentcopilotsetting.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_agentassistenabled: boolean;
		msdyn_agentassistkbfilter: string;
		msdyn_agentassistkbfilterlive: string;
		msdyn_agentassisturl: string;
		/** Unique identifier for entity instances */
		msdyn_agentcopilotsettingId: string;
		msdyn_agentlist: string;
		msdyn_allagentsenabled: boolean;
		msdyn_allowcrossgeo: boolean;
		msdyn_allowtranslation: boolean;
		/** (Deprecated) Applies only to Omnichannel features */
		msdyn_allworkstreamsenabled: boolean;
		msdyn_answerassistenabled: boolean;
		msdyn_answerassistkbfilter: string;
		msdyn_answerassistkbfilterlive: string;
		msdyn_answerassisturl: string;
		msdyn_autocaseclosureenabled: boolean;
		msdyn_autocaseclosuresettings: string;
		msdyn_casetocaseresolutionmanualflowenabled: boolean;
		msdyn_companyscopeurls: string;
		/** The date before when the admin should have consented */
		msdyn_consentacceptanceby_UtcDateAndTime: Date;
		/** The date when the admin has most recently consented */
		msdyn_consentacceptedon_UtcDateAndTime: Date;
		msdyn_conversationtocaseautonomousflowenabled: boolean;
		msdyn_conversationtocasemanualflowenabled: boolean;
		msdyn_copilotcustomconfiguration: string;
		/** Indicates the mode of enablement for email assist. */
		msdyn_copilotemailenabledmode: OptionSet.msdyn_agentcopilotsetting.msdyn_copilotemailenabledmode;
		msdyn_copilotembedsettings: string;
		msdyn_copilotenabled: boolean;
		/** The display name of the custom entity. */
		msdyn_displayname: string;
		/** Stores the status of the workflow that enables Dataverse Copilot */
		msdyn_dvcopilotstatus: string;
		msdyn_dynamicfilterconfig: string;
		msdyn_dynamicfilterconfiglive: string;
		msdyn_emailassistconfiguration: string;
		msdyn_emailassistenabled: boolean;
		msdyn_emailassistkbfilter: string;
		msdyn_emailassistkbfilterlive: string;
		msdyn_emailassisturl: string;
		msdyn_emailsentimentenabled: boolean;
		msdyn_interactionsenabled: boolean;
		/** Whether Deterministic Knowledge is enabled */
		msdyn_isdeterministicknowledgeenabled: boolean;
		/** Whether Dataverse Copilot is enabled */
		msdyn_isdvcopilotenabled: boolean;
		msdyn_isemaildefaultonenabledone: boolean;
		msdyn_isknowledgehubconnectorsourceenabled: boolean;
		msdyn_kbenabled: boolean;
		/** Determines whether or not agents have the ability to edit their KB filters */
		msdyn_kbfilterallowagentedit: boolean;
		msdyn_kbfilterforpersonalization: string;
		msdyn_kbfilterforpersonalizationlive: string;
		msdyn_knowledgearticlecountlive: number;
		msdyn_knowledgearticlesourceenabled: boolean;
		/** Used to store information about the knowledge connectors publish status */
		msdyn_knowledgeconnectorpublishstatus: string;
		msdyn_lasttrainingstatus: OptionSet.msdyn_agentcopilotsetting.msdyn_lasttrainingstatus;
		/** The date when the last training completed successfully */
		msdyn_lasttrainingtime_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_pluginconfiguration: string;
		msdyn_proactivepromptsenabled: boolean;
		msdyn_searchconfiguration: string;
		msdyn_sharepointsourceenabled: boolean;
		msdyn_suggestedpromptsenabled: boolean;
		msdyn_systemstatus: OptionSet.msdyn_agentcopilotsetting.msdyn_systemstatus;
		msdyn_transcriptenabled: boolean;
		/** (Deprecated) A unique key identifier. */
		msdyn_uniquekey: string;
		msdyn_useagentlanguage: boolean;
		/** (Deprecated) Applies only to Omnichannel features */
		msdyn_workstreamlist: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Agent Copilot Setting */
		statecode: OptionSet.msdyn_agentcopilotsetting.statecode;
		/** Reason for the status of the Agent Copilot Setting */
		statuscode: OptionSet.msdyn_agentcopilotsetting.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_agentassistenabled: string;
			readonly msdyn_agentassistkbfilter: string;
			readonly msdyn_agentassistkbfilterlive: string;
			readonly msdyn_agentassisturl: string;
			/** Unique identifier for entity instances */
			readonly msdyn_agentcopilotsettingId: string;
			readonly msdyn_agentlist: string;
			readonly msdyn_allagentsenabled: string;
			readonly msdyn_allowcrossgeo: string;
			readonly msdyn_allowtranslation: string;
			/** (Deprecated) Applies only to Omnichannel features */
			readonly msdyn_allworkstreamsenabled: string;
			readonly msdyn_answerassistenabled: string;
			readonly msdyn_answerassistkbfilter: string;
			readonly msdyn_answerassistkbfilterlive: string;
			readonly msdyn_answerassisturl: string;
			readonly msdyn_autocaseclosureenabled: string;
			readonly msdyn_autocaseclosuresettings: string;
			readonly msdyn_casetocaseresolutionmanualflowenabled: string;
			readonly msdyn_companyscopeurls: string;
			/** The date before when the admin should have consented */
			readonly msdyn_consentacceptanceby_UtcDateAndTime: string;
			/** The date when the admin has most recently consented */
			readonly msdyn_consentacceptedon_UtcDateAndTime: string;
			readonly msdyn_conversationtocaseautonomousflowenabled: string;
			readonly msdyn_conversationtocasemanualflowenabled: string;
			readonly msdyn_copilotcustomconfiguration: string;
			/** Indicates the mode of enablement for email assist. */
			readonly msdyn_copilotemailenabledmode: string;
			readonly msdyn_copilotembedsettings: string;
			readonly msdyn_copilotenabled: string;
			/** The display name of the custom entity. */
			readonly msdyn_displayname: string;
			/** Stores the status of the workflow that enables Dataverse Copilot */
			readonly msdyn_dvcopilotstatus: string;
			readonly msdyn_dynamicfilterconfig: string;
			readonly msdyn_dynamicfilterconfiglive: string;
			readonly msdyn_emailassistconfiguration: string;
			readonly msdyn_emailassistenabled: string;
			readonly msdyn_emailassistkbfilter: string;
			readonly msdyn_emailassistkbfilterlive: string;
			readonly msdyn_emailassisturl: string;
			readonly msdyn_emailsentimentenabled: string;
			readonly msdyn_interactionsenabled: string;
			/** Whether Deterministic Knowledge is enabled */
			readonly msdyn_isdeterministicknowledgeenabled: string;
			/** Whether Dataverse Copilot is enabled */
			readonly msdyn_isdvcopilotenabled: string;
			readonly msdyn_isemaildefaultonenabledone: string;
			readonly msdyn_isknowledgehubconnectorsourceenabled: string;
			readonly msdyn_kbenabled: string;
			/** Determines whether or not agents have the ability to edit their KB filters */
			readonly msdyn_kbfilterallowagentedit: string;
			readonly msdyn_kbfilterforpersonalization: string;
			readonly msdyn_kbfilterforpersonalizationlive: string;
			readonly msdyn_knowledgearticlecountlive: string;
			readonly msdyn_knowledgearticlesourceenabled: string;
			/** Used to store information about the knowledge connectors publish status */
			readonly msdyn_knowledgeconnectorpublishstatus: string;
			readonly msdyn_lasttrainingstatus: string;
			/** The date when the last training completed successfully */
			readonly msdyn_lasttrainingtime_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_pluginconfiguration: string;
			readonly msdyn_proactivepromptsenabled: string;
			readonly msdyn_searchconfiguration: string;
			readonly msdyn_sharepointsourceenabled: string;
			readonly msdyn_suggestedpromptsenabled: string;
			readonly msdyn_systemstatus: string;
			readonly msdyn_transcriptenabled: string;
			/** (Deprecated) A unique key identifier. */
			readonly msdyn_uniquekey: string;
			readonly msdyn_useagentlanguage: string;
			/** (Deprecated) Applies only to Omnichannel features */
			readonly msdyn_workstreamlist: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Agent Copilot Setting */
			readonly statecode: string;
			/** Reason for the status of the Agent Copilot Setting */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_agentcopilotsetting {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdyn_copilotemailenabledmode {
			/** 133230002 */
			_default,
			/** 133230001 */
			manual
		}
		enum msdyn_lasttrainingstatus {
			/** 100230102 */
			Completed,
			/** 100230103 */
			Failed,
			/** 100230101 */
			Initiated,
			/** 100230104 */
			InvalidKBFilters,
			/** 100230105 */
			NoKBArticles
		}
		enum msdyn_systemstatus {
			/** 100230002 */
			Configuring,
			/** 100230004 */
			Disabling,
			/** 100230005 */
			FailureConfiguring,
			/** 100230001 */
			New,
			/** 100230003 */
			Ready
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}