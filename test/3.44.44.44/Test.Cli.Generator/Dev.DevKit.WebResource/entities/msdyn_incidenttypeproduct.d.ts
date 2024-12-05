//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_incidenttypeproduct_Information {
		interface Tabs {
		}
		interface Body {
			/** Enter the description of the product as presented to the customer. The value defaults to the description defined on the product. */
			msdyn_Description: DevKit.Controls.String;
			/** The Incident related to this product */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			/** Enter any internal notes you want to track on this product. */
			msdyn_InternalDescription: DevKit.Controls.String;
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Product/Service associated with Incident Type Product. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Shows the actual quantity of the product. */
			msdyn_Quantity: DevKit.Controls.Double;
			/** The unit that determines the pricing and final quantity for this product */
			msdyn_Unit: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_incidenttypeproduct_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_incidenttypeproduct_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_incidenttypeproduct_Appointments: DevKit.Controls.NavigationItem,
			msdyn_incidenttypeproduct_Emails: DevKit.Controls.NavigationItem,
			msdyn_incidenttypeproduct_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_incidenttypeproduct_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_incidenttypeproduct_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_incidenttypeproduct_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_incidenttypeproduct_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_incidenttypeproduct_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_incidenttypeproduct_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_incidenttypeproduct_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_incidenttypeproduct_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_incidenttypeproduct_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_incidenttypeproduct_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_incidenttypeproduct_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_incidenttypeproduct_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_incidenttypeproduct_Information */
		Body: DevKit.Formmsdyn_incidenttypeproduct_Information.Body;
		/** The Navigation of form msdyn_incidenttypeproduct_Information */
		Navigation: DevKit.Formmsdyn_incidenttypeproduct_Information.Navigation;
		/** The SidePanes of form msdyn_incidenttypeproduct_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormIncident_Type_Product_Quick_Create {
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
			/** Enter the description of the product as presented to the customer. The value defaults to the description defined on the product. */
			msdyn_Description: DevKit.Controls.String;
			/** The Incident related to this product */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			/** Enter any internal notes you want to track on this product. */
			msdyn_InternalDescription: DevKit.Controls.String;
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Product/Service associated with Incident Type Product. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Shows the actual quantity of the product. */
			msdyn_Quantity: DevKit.Controls.Double;
			/** The unit that determines the pricing and final quantity for this product */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class FormIncident_Type_Product_Quick_Create extends DevKit.IForm {
		/**
		* Incident Type Product Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Incident_Type_Product_Quick_Create */
		Body: DevKit.FormIncident_Type_Product_Quick_Create.Body;
	}
	class msdyn_incidenttypeproductApi {
		/**
		* DynamicsCrm.DevKit msdyn_incidenttypeproductApi
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
		/** Incident type suggestion result applied to this incident type product. */
		msdyn_AppliedSuggestionResult: string;
		/** Enter the description of the product as presented to the customer. The value defaults to the description defined on the product. */
		msdyn_Description: string;
		/** The Incident related to this product */
		msdyn_IncidentType: string;
		/** Shows the entity instances. */
		msdyn_incidenttypeproductId: string;
		/** Enter any internal notes you want to track on this product. */
		msdyn_InternalDescription: string;
		msdyn_LineOrder: number;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for Product/Service associated with Incident Type Product. */
		msdyn_Product: string;
		/** Shows the actual quantity of the product. */
		msdyn_Quantity: number;
		/** The unit that determines the pricing and final quantity for this product */
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
		/** Status of the Incident Type Product */
		statecode: OptionSet.msdyn_incidenttypeproduct.statecode;
		/** Reason for the status of the Incident Type Product */
		statuscode: OptionSet.msdyn_incidenttypeproduct.statuscode;
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
			/** Incident type suggestion result applied to this incident type product. */
			readonly msdyn_AppliedSuggestionResult: string;
			/** Enter the description of the product as presented to the customer. The value defaults to the description defined on the product. */
			readonly msdyn_Description: string;
			/** The Incident related to this product */
			readonly msdyn_IncidentType: string;
			/** Shows the entity instances. */
			readonly msdyn_incidenttypeproductId: string;
			/** Enter any internal notes you want to track on this product. */
			readonly msdyn_InternalDescription: string;
			readonly msdyn_LineOrder: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for Product/Service associated with Incident Type Product. */
			readonly msdyn_Product: string;
			/** Shows the actual quantity of the product. */
			readonly msdyn_Quantity: string;
			/** The unit that determines the pricing and final quantity for this product */
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
			/** Status of the Incident Type Product */
			readonly statecode: string;
			/** Reason for the status of the Incident Type Product */
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
	namespace msdyn_incidenttypeproduct {
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