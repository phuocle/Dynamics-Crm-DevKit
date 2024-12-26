//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_slakpi_Information {
		interface tab_General_Sections {
			PauseConfiguration: DevKit.Controls.Section;
		}
		interface tab_General extends DevKit.Controls.ITab {
			Section: tab_General_Sections;
		}
		interface Tabs {
			General: tab_General;
		}
		interface Body {
			Tab: Tabs;
			msdyn_AdvancedPauseConfiguration: DevKit.Controls.Boolean;
			msdyn_ApplicableFromField: DevKit.Controls.String;
			msdyn_EntityName: DevKit.Controls.String;
			msdyn_KPIField: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_pauseconfigurationxml: DevKit.Controls.ActionCards;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			: DevKit.Controls.ELSE3???;//WebResource_preview - 6DC0B71D-E1F9-4118-8347-1CF35C38954D -- FOR DEBUG 
			WebResource_preview: DevKit.Controls.WebResource;
		}
		interface Navigation {
			msdyn_msdyn_slakpi_slaitem: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_slakpi_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_slakpi_Information */
		Body: DevKit.Formmsdyn_slakpi_Information.Body;
		/** The Navigation of form msdyn_slakpi_Information */
		Navigation: DevKit.Formmsdyn_slakpi_Information.Navigation;
		/** The SidePanes of form msdyn_slakpi_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSLA_KPI_Quick_Create {
		interface tab_tab_1_Sections {
			PauseConfiguration: DevKit.Controls.Section;
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			msdyn_advancedpauseconfiguration: DevKit.Controls.ELSE3???;//msdyn_advancedpauseconfiguration - 67FAC785-CD58-4F9F-ABB3-4B7DDC6ED5EE -- FOR DEBUG 
			msdyn_ApplicableFromField: DevKit.Controls.String;
			msdyn_EntityName: DevKit.Controls.String;
			msdyn_KPIField: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_pauseconfigurationxml: DevKit.Controls.ELSE3???;//msdyn_pauseconfigurationxml - F9A8A302-114E-466A-B582-6771B2AE0D93 -- FOR DEBUG 
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			: DevKit.Controls.ELSE3???;//WebResource_preview - 6E4367D6-894A-42A1-BD75-BAE93B2F823D -- FOR DEBUG 
			: DevKit.Controls.ELSE3???;//WebResource_preview - 9FDF5F91-88B1-47F4-AD53-C11EFC01A01E -- FOR DEBUG 
		}
	}
	class FormSLA_KPI_Quick_Create extends DevKit.IForm {
		/**
		* SLA KPI Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SLA_KPI_Quick_Create */
		Body: DevKit.FormSLA_KPI_Quick_Create.Body;
	}
	class msdyn_slakpiApi {
		/**
		* DynamicsCrm.DevKit msdyn_slakpiApi
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
		readonly ComponentState: OptionSet.msdyn_slakpi.ComponentState;
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
		msdyn_AdvancedPauseConfiguration: boolean;
		msdyn_ApplicableFromDisplayName: string;
		msdyn_ApplicableFromField: string;
		msdyn_Description: string;
		msdyn_EntityDisplayName: string;
		msdyn_EntityName: string;
		msdyn_KPIField: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_PauseConfigurationXml: string;
		/** Unique identifier for entity instances */
		msdyn_slakpiId: string;
		msdyn_WorkflowInfo: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the SLAKPI */
		statecode: OptionSet.msdyn_slakpi.statecode;
		/** Reason for the status of the SLAKPI */
		statuscode: OptionSet.msdyn_slakpi.statuscode;
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
			readonly msdyn_AdvancedPauseConfiguration: string;
			readonly msdyn_ApplicableFromDisplayName: string;
			readonly msdyn_ApplicableFromField: string;
			readonly msdyn_Description: string;
			readonly msdyn_EntityDisplayName: string;
			readonly msdyn_EntityName: string;
			readonly msdyn_KPIField: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_PauseConfigurationXml: string;
			/** Unique identifier for entity instances */
			readonly msdyn_slakpiId: string;
			readonly msdyn_WorkflowInfo: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the SLAKPI */
			readonly statecode: string;
			/** Reason for the status of the SLAKPI */
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
	namespace msdyn_slakpi {
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
		enum statecode {
			/** 1 */
			Active,
			/** 0 */
			Inactive
		}
		enum statuscode {
			/** 2 */
			Active,
			/** 1 */
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