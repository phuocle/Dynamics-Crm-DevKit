//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_incidenttypeservice_Information {
		interface Tabs {
		}
		interface Body {
			/** Enter the description of the service as presented to the customer. The value defaults to the description defined on the service. */
			msdyn_Description: DevKit.Controls.String;
			/** Shows the duration of the service. */
			msdyn_Duration: DevKit.Controls.Integer;
			/** The Incident related to this product */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			/** Enter any internal notes you want to track on this service. */
			msdyn_InternalDescription: DevKit.Controls.String;
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Product/Service associated with Incident Type Service. */
			msdyn_Service: DevKit.Controls.Lookup;
			/** The unit that determines the pricing for this service */
			msdyn_Unit: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Incident Type Service */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_incidenttypeservice_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_incidenttypeservice_Information */
		Body: DevKit.Formmsdyn_incidenttypeservice_Information.Body;
		/** The Footer section of form msdyn_incidenttypeservice_Information */
		Footer: DevKit.Formmsdyn_incidenttypeservice_Information.Footer;
		/** The Navigation of form msdyn_incidenttypeservice_Information */
		Navigation: DevKit.Formmsdyn_incidenttypeservice_Information.Navigation;
		/** The Process of form msdyn_incidenttypeservice_Information */
		Process: DevKit.Formmsdyn_incidenttypeservice_Information.Process;
		/** The SidePanes of form msdyn_incidenttypeservice_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormIncident_Type_Service_Quick_Create {
		interface tab_tab_1_Sections {
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
			/** Enter the description of the service as presented to the customer. The value defaults to the description defined on the service. */
			msdyn_Description: DevKit.Controls.String;
			/** Shows the duration of the service. */
			msdyn_Duration: DevKit.Controls.Integer;
			/** The Incident related to this product */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			/** Enter any internal notes you want to track on this service. */
			msdyn_InternalDescription: DevKit.Controls.String;
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Product/Service associated with Incident Type Service. */
			msdyn_Service: DevKit.Controls.Lookup;
			/** The unit that determines the pricing for this service */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class FormIncident_Type_Service_Quick_Create extends DevKit.IForm {
		/**
		* Incident Type Service Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Incident_Type_Service_Quick_Create */
		Body: DevKit.FormIncident_Type_Service_Quick_Create.Body;
	}
	class msdyn_incidenttypeserviceApi {
		/**
		* DynamicsCrm.DevKit msdyn_incidenttypeserviceApi
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
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Incident type suggestion result applied to this incident type service. */
		msdyn_AppliedSuggestionResult: string;
		/** Enter the description of the service as presented to the customer. The value defaults to the description defined on the service. */
		msdyn_Description: string;
		/** Shows the duration of the service. */
		msdyn_Duration: number;
		/** The Incident related to this product */
		msdyn_IncidentType: string;
		/** Shows the entity instances. */
		msdyn_incidenttypeserviceId: string;
		/** Enter any internal notes you want to track on this service. */
		msdyn_InternalDescription: string;
		msdyn_LineOrder: number;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for Product/Service associated with Incident Type Service. */
		msdyn_Service: string;
		/** The unit that determines the pricing for this service */
		msdyn_Unit: string;
		/** Shows the date and time that the record was migrated. */
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
		/** Status of the Incident Type Service */
		statecode: OptionSet.msdyn_incidenttypeservice.statecode;
		/** Reason for the status of the Incident Type Service */
		statuscode: OptionSet.msdyn_incidenttypeservice.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Incident type suggestion result applied to this incident type service. */
			readonly msdyn_AppliedSuggestionResult: string;
			/** Enter the description of the service as presented to the customer. The value defaults to the description defined on the service. */
			readonly msdyn_Description: string;
			/** Shows the duration of the service. */
			readonly msdyn_Duration: string;
			/** The Incident related to this product */
			readonly msdyn_IncidentType: string;
			/** Shows the entity instances. */
			readonly msdyn_incidenttypeserviceId: string;
			/** Enter any internal notes you want to track on this service. */
			readonly msdyn_InternalDescription: string;
			readonly msdyn_LineOrder: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for Product/Service associated with Incident Type Service. */
			readonly msdyn_Service: string;
			/** The unit that determines the pricing for this service */
			readonly msdyn_Unit: string;
			/** Shows the date and time that the record was migrated. */
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
			/** Status of the Incident Type Service */
			readonly statecode: string;
			/** Reason for the status of the Incident Type Service */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_incidenttypeservice {
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