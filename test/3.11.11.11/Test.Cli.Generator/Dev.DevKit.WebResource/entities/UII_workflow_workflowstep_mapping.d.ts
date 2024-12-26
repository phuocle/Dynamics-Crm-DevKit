//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormUII_workflow_workflowstep_mapping_Information {
		interface tab__7FC9CAC9_93A2_47AC_9B01_92E75A065880_Sections {
			_915420CA_99B8_47EA_BC0E_A10F42A59E41: DevKit.Controls.Section;
		}
		interface tab__A0F2ABD0_C66B_4EB0_B939_EBB9ECAA26CD_Sections {
			_DF2F3FC6_6A97_48E7_BD1A_6BD55B1B06CB: DevKit.Controls.Section;
		}
		interface tab__7FC9CAC9_93A2_47AC_9B01_92E75A065880 extends DevKit.Controls.ITab {
			Section: tab__7FC9CAC9_93A2_47AC_9B01_92E75A065880_Sections;
		}
		interface tab__A0F2ABD0_C66B_4EB0_B939_EBB9ECAA26CD extends DevKit.Controls.ITab {
			Section: tab__A0F2ABD0_C66B_4EB0_B939_EBB9ECAA26CD_Sections;
		}
		interface Tabs {
			_7FC9CAC9_93A2_47AC_9B01_92E75A065880: tab__7FC9CAC9_93A2_47AC_9B01_92E75A065880;
			_A0F2ABD0_C66B_4EB0_B939_EBB9ECAA26CD: tab__A0F2ABD0_C66B_4EB0_B939_EBB9ECAA26CD;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Captures the Sequence number. */
			UII_sequence: DevKit.Controls.String;
			/** Workflow Mapping */
			uii_workflow_mappingid: DevKit.Controls.Lookup;
			/** Unique identifier for UII Workflow Step associated with UII Workflow-Step Mapping. */
			uii_workflowstep_mappingid: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the UII Workflow-Step Mapping */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormUII_workflow_workflowstep_mapping_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form UII_workflow_workflowstep_mapping_Information */
		Body: DevKit.FormUII_workflow_workflowstep_mapping_Information.Body;
		/** The Footer section of form UII_workflow_workflowstep_mapping_Information */
		Footer: DevKit.FormUII_workflow_workflowstep_mapping_Information.Footer;
		/** The Process of form UII_workflow_workflowstep_mapping_Information */
		Process: DevKit.FormUII_workflow_workflowstep_mapping_Information.Process;
		/** The SidePanes of form UII_workflow_workflowstep_mapping_Information */
		SidePanes: DevKit.SidePanes;
	}
	class UII_workflow_workflowstep_mappingApi {
		/**
		* DynamicsCrm.DevKit UII_workflow_workflowstep_mappingApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the UII Workflow-Step Mapping */
		statecode: OptionSet.UII_workflow_workflowstep_mapping.statecode;
		/** Reason for the status of the UII Workflow-Step Mapping */
		statuscode: OptionSet.UII_workflow_workflowstep_mapping.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Captures the Sequence number. */
		UII_sequence: string;
		/** Workflow Mapping */
		uii_workflow_mappingid: string;
		/** Unique identifier for entity instances */
		UII_workflow_workflowstep_mappingId: string;
		/** Unique identifier for UII Workflow Step associated with UII Workflow-Step Mapping. */
		uii_workflowstep_mappingid: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the UII Workflow-Step Mapping */
			readonly statecode: string;
			/** Reason for the status of the UII Workflow-Step Mapping */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Captures the Sequence number. */
			readonly UII_sequence: string;
			/** Workflow Mapping */
			readonly uii_workflow_mappingid: string;
			/** Unique identifier for entity instances */
			readonly UII_workflow_workflowstep_mappingId: string;
			/** Unique identifier for UII Workflow Step associated with UII Workflow-Step Mapping. */
			readonly uii_workflowstep_mappingid: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace UII_workflow_workflowstep_mapping {
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}