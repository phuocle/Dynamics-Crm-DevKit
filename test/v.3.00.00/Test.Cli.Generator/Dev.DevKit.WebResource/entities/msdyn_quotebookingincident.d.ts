//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_quotebookingincident_Information {
		interface tab__12F021EA_BAAA_460F_99BF_53D1F1A1F781_Sections {
			_4366A258_2E1D_4CC0_A7D7_9318CC651C44: DevKit.Controls.Section;
		}
		interface tab__12F021EA_BAAA_460F_99BF_53D1F1A1F781 extends DevKit.Controls.ITab {
			Section: tab__12F021EA_BAAA_460F_99BF_53D1F1A1F781_Sections;
		}
		interface Tabs {
			_12F021EA_BAAA_460F_99BF_53D1F1A1F781: tab__12F021EA_BAAA_460F_99BF_53D1F1A1F781;
		}
		interface Body {
			Tab: Tabs;
			/** Customer Asset related to this incident reported */
			msdyn_customerasset: DevKit.Controls.Lookup;
			/** Enter the description of the incident */
			msdyn_description: DevKit.Controls.String;
			/** Shows the time estimated to resolve this incident. */
			msdyn_estimatedduration: DevKit.Controls.Integer;
			/** Shows the incident type associated with the quote booking incident. */
			msdyn_incidenttype: DevKit.Controls.Lookup;
			/** Displays name of the quote booking incident */
			msdyn_name: DevKit.Controls.String;
			/** Shows the quote booking setup associated with the quote booking incident. */
			msdyn_quotebookingsetup: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_quotebookingincident_msdyn_quotebookingproduct_QuoteBookingIncident: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_quotebookingincident_msdyn_quotebookingservice_QuoteBookingIncident: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_quotebookingincident_msdyn_quotebookingservicetask_QuoteBookingIncident: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_quotebookingincident_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotebookingincident_Information */
		Body: DevKit.Formmsdyn_quotebookingincident_Information.Body;
		/** The Navigation of form msdyn_quotebookingincident_Information */
		Navigation: DevKit.Formmsdyn_quotebookingincident_Information.Navigation;
		/** The Process of form msdyn_quotebookingincident_Information */
		Process: DevKit.Formmsdyn_quotebookingincident_Information.Process;
		/** The SidePanes of form msdyn_quotebookingincident_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_quotebookingincident_Information2 {
		interface Tabs {
		}
		interface Body {
			/** Displays name of the quote booking incident */
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_quotebookingincident_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotebookingincident_Information2 */
		Body: DevKit.Formmsdyn_quotebookingincident_Information2.Body;
		/** The Process of form msdyn_quotebookingincident_Information2 */
		Process: DevKit.Formmsdyn_quotebookingincident_Information2.Process;
		/** The SidePanes of form msdyn_quotebookingincident_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_quotebookingincident_Information3 {
		interface tab_QuoteBookingIncidentTab_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_QuoteBookingIncidentTab extends DevKit.Controls.ITab {
			Section: tab_QuoteBookingIncidentTab_Sections;
		}
		interface Tabs {
			QuoteBookingIncidentTab: tab_QuoteBookingIncidentTab;
		}
		interface Body {
			Tab: Tabs;
			/** Customer Asset related to this incident reported */
			msdyn_customerasset: DevKit.Controls.Lookup;
			/** Enter the description of the incident */
			msdyn_description: DevKit.Controls.String;
			/** Shows the time estimated to resolve this incident. */
			msdyn_estimatedduration: DevKit.Controls.Integer;
			/** Shows the incident type associated with the quote booking incident. */
			msdyn_incidenttype: DevKit.Controls.Lookup;
			/** Displays name of the quote booking incident */
			msdyn_name: DevKit.Controls.String;
			/** Shows the quote booking setup associated with the quote booking incident. */
			msdyn_quotebookingsetup: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_quotebookingincident_Information3 extends DevKit.IForm {
		/**
		* Information [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotebookingincident_Information3 */
		Body: DevKit.Formmsdyn_quotebookingincident_Information3.Body;
	}
	class msdyn_quotebookingincidentApi {
		/**
		* DynamicsCrm.DevKit msdyn_quotebookingincidentApi
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
		/** Customer Asset related to this incident reported */
		msdyn_customerasset: string;
		/** Enter the description of the incident */
		msdyn_description: string;
		/** Shows the time estimated to resolve this incident. */
		msdyn_estimatedduration: number;
		/** If "yes", copied  service task, products, and services that are associated with the incident to quote booking setup */
		msdyn_incidentitemscopied: boolean;
		/** Shows the incident type associated with the quote booking incident. */
		msdyn_incidenttype: string;
		/** Internal use only */
		msdyn_internalflags: string;
		/** Displays name of the quote booking incident */
		msdyn_name: string;
		/** Shows the quote associated with the agreement booking incident. */
		msdyn_Quote: string;
		/** Unique identifier for entity instances */
		msdyn_quotebookingincidentId: string;
		/** Shows the quote booking setup associated with the quote booking incident. */
		msdyn_quotebookingsetup: string;
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
		/** Status of the Quote Booking Incident */
		statecode: OptionSet.msdyn_quotebookingincident.statecode;
		/** Reason for the status of the Quote Booking Incident */
		statuscode: OptionSet.msdyn_quotebookingincident.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_quotebookingincident {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}