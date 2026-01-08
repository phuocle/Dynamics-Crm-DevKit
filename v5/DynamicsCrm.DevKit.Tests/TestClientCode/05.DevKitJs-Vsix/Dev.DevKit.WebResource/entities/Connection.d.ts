//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormConnection_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Choose the primary account, contact, or other record involved in the connection. */
			Record1Id: DevKit.Controls.Lookup;
		}
		interface tab_details_Sections {
			/** Connected From */
			connect_from: DevKit.Controls.Section;
			/** Details */
			details: DevKit.Controls.Section;
		}
		interface tab_info_Sections {
			/** Description */
			description: DevKit.Controls.Section;
			/** Connect To */
			info_s: DevKit.Controls.Section;
		}
		/** Details */
		interface tab_details extends DevKit.Controls.ITab {
			Section: tab_details_Sections;
		}
		/** Connect To */
		interface tab_info extends DevKit.Controls.ITab {
			Section: tab_info_Sections;
		}
		interface Tabs {
			/** Details */
			details: tab_details;
			/** Connect To */
			info: tab_info;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the connection, such as the length or quality of the relationship. */
			Description: DevKit.Controls.String;
			/** Enter the end date of the connection. */
			EffectiveEnd: DevKit.Controls.DateOnly;
			/** Enter the start date of the connection. */
			EffectiveStart: DevKit.Controls.DateOnly;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the primary account, contact, or other record involved in the connection. */
			Record1Id: DevKit.Controls.Lookup;
			/** Choose the primary party's role or relationship with the second party. */
			Record1RoleId: DevKit.Controls.Lookup;
			/** Select the secondary account, contact, or other record involved in the connection. */
			Record2Id: DevKit.Controls.Lookup;
			/** Choose the secondary party's role or relationship with the primary party. */
			Record2RoleId: DevKit.Controls.Lookup;
		}
	}
	export class FormConnection_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Connection_Information */
		Body: DevKit.FormConnection_Information.Body;
		/** The Header section of form Connection_Information */
		Header: DevKit.FormConnection_Information.Header;
	}
	export class ConnectionApi {
		/**
		* DynamicsCrm.DevKit ConnectionApi
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
		/** Unique identifier of the connection. */
		ConnectionId: string | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Type additional information to describe the connection, such as the length or quality of the relationship. */
		Description: string | null;
		/** Enter the end date of the connection. */
		EffectiveEnd_UtcDateOnly: Date | null;
		/** Enter the start date of the connection. */
		EffectiveStart_UtcDateOnly: Date | null;
		/** The default image for the entity. */
		EntityImage: string | null;
		EntityImage_Timestamp: number | null;
		EntityImage_URL: string | null;
		/** For internal use only. */
		readonly EntityImageId: string | null;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Indicates that this is the master record. */
		readonly IsMaster: boolean | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the connection. */
		readonly Name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Shows the business unit that the record owner belongs to. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the connection. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the connection. */
		readonly OwningUser: string | null;
		/** Shows the record type of the source record. */
		readonly Record1ObjectTypeCode: OptionSet.Connection.Record1ObjectTypeCode | null;
		/** Choose the primary party's role or relationship with the second party. */
		Record1RoleId: string | null;
		/** Shows the record type of the target record. */
		readonly Record2ObjectTypeCode: OptionSet.Connection.Record2ObjectTypeCode | null;
		/** Choose the secondary party's role or relationship with the primary party. */
		Record2RoleId: string | null;
		/** Unique identifier for the reciprocal connection record. */
		readonly RelatedConnectionId: string | null;
		/** Shows whether the connection is active or inactive. Inactive connections are read-only and can't be edited unless they are reactivated. */
		StateCode: OptionSet.Connection.StateCode | null;
		/** Reason for the status of the connection. */
		StatusCode: OptionSet.Connection.StatusCode | null;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string | null;
		/** Version number of the connection. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the connection. */
			readonly ConnectionId: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information to describe the connection, such as the length or quality of the relationship. */
			readonly Description: string;
			/** Enter the end date of the connection. */
			readonly EffectiveEnd_UtcDateOnly: string;
			/** Enter the start date of the connection. */
			readonly EffectiveStart_UtcDateOnly: string;
			/** The default image for the entity. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** For internal use only. */
			readonly EntityImageId: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Indicates that this is the master record. */
			readonly IsMaster: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the connection. */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows the business unit that the record owner belongs to. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the connection. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the connection. */
			readonly OwningUser: string;
			/** Shows the record type of the source record. */
			readonly Record1ObjectTypeCode: string;
			/** Choose the primary party's role or relationship with the second party. */
			readonly Record1RoleId: string;
			/** Shows the record type of the target record. */
			readonly Record2ObjectTypeCode: string;
			/** Choose the secondary party's role or relationship with the primary party. */
			readonly Record2RoleId: string;
			/** Unique identifier for the reciprocal connection record. */
			readonly RelatedConnectionId: string;
			/** Shows whether the connection is active or inactive. Inactive connections are read-only and can't be edited unless they are reactivated. */
			readonly StateCode: string;
			/** Reason for the status of the connection. */
			readonly StatusCode: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Version number of the connection. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Connection {
		enum Record1IdObjectTypeCode {
		}
		enum Record1ObjectTypeCode {
			/** Account = 1*/
			Account = 1,
			/** Activity = 4200*/
			Activity = 4200,
			/** Appointment = 4201*/
			Appointment = 4201,
			/** Channel_Access_Profile_Rule = 9400*/
			Channel_Access_Profile_Rule = 9400,
			/** Contact = 2*/
			Contact = 2,
			/** Email = 4202*/
			Email = 4202,
			/** Fax = 4204*/
			Fax = 4204,
			/** Goal = 9600*/
			Goal = 9600,
			/** Invitation = 10406*/
			Invitation = 10406,
			/** Invite_Redemption = 10407*/
			Invite_Redemption = 10407,
			/** Knowledge_Article = 9953*/
			Knowledge_Article = 9953,
			/** Knowledge_Base_Record = 9930*/
			Knowledge_Base_Record = 9930,
			/** Letter = 4207*/
			Letter = 4207,
			/** Phone_Call = 4210*/
			Phone_Call = 4210,
			/** Position = 50*/
			Position = 50,
			/** Process_Session = 4710*/
			Process_Session = 4710,
			/** Publishing_State_Transition_Rule = 10426*/
			Publishing_State_Transition_Rule = 10426,
			/** Recurring_Appointment = 4251*/
			Recurring_Appointment = 4251,
			/** Shortcut = 10428*/
			Shortcut = 10428,
			/** Social_Activity = 4216*/
			Social_Activity = 4216,
			/** Social_Profile = 99*/
			Social_Profile = 99,
			/** Task = 4212*/
			Task = 4212,
			/** Team = 9*/
			Team = 9,
			/** Territory = 2013*/
			Territory = 2013,
			/** User = 8*/
			User = 8,
			/** Website = 10440*/
			Website = 10440
		}
		enum Record2IdObjectTypeCode {
		}
		enum Record2ObjectTypeCode {
			/** Account = 1*/
			Account = 1,
			/** Activity = 4200*/
			Activity = 4200,
			/** Appointment = 4201*/
			Appointment = 4201,
			/** Channel_Access_Profile_Rule = 9400*/
			Channel_Access_Profile_Rule = 9400,
			/** Contact = 2*/
			Contact = 2,
			/** Email = 4202*/
			Email = 4202,
			/** Fax = 4204*/
			Fax = 4204,
			/** Goal = 9600*/
			Goal = 9600,
			/** Invitation = 10406*/
			Invitation = 10406,
			/** Invite_Redemption = 10407*/
			Invite_Redemption = 10407,
			/** Knowledge_Article = 9953*/
			Knowledge_Article = 9953,
			/** Knowledge_Base_Record = 9930*/
			Knowledge_Base_Record = 9930,
			/** Letter = 4207*/
			Letter = 4207,
			/** Phone_Call = 4210*/
			Phone_Call = 4210,
			/** Position = 50*/
			Position = 50,
			/** Process_Session = 4710*/
			Process_Session = 4710,
			/** Publishing_State_Transition_Rule = 10426*/
			Publishing_State_Transition_Rule = 10426,
			/** Recurring_Appointment = 4251*/
			Recurring_Appointment = 4251,
			/** Shortcut = 10428*/
			Shortcut = 10428,
			/** Social_Activity = 4216*/
			Social_Activity = 4216,
			/** Social_Profile = 99*/
			Social_Profile = 99,
			/** Task = 4212*/
			Task = 4212,
			/** Team = 9*/
			Team = 9,
			/** Territory = 2013*/
			Territory = 2013,
			/** User = 8*/
			User = 8,
			/** Website = 10440*/
			Website = 10440
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
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