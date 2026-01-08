//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class QueueApi {
		/**
		* DynamicsCrm.DevKit QueueApi
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
		/** This attribute is no longer used. The data is now in the Mailbox.AllowEmailConnectorToUseCredentials attribute. */
		readonly AllowEmailCredentials: boolean | null;
		/** Unique identifier of the business unit with which the queue is associated. */
		BusinessUnitId: string | null;
		/** Unique identifier of the user who created the queue record. */
		readonly CreatedBy: string | null;
		/** Date and time when the queue was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the queue. */
		readonly CreatedOnBehalfBy: string | null;
		/** Select the mailbox associated with this queue. */
		readonly DefaultMailbox: string | null;
		/** Description of the queue. */
		Description: string | null;
		/** Email address that is associated with the queue. */
		EMailAddress: string | null;
		/** This attribute is no longer used. The data is now in the Mailbox.Password attribute. */
		readonly EmailPassword: string | null;
		/** Shows the status of the primary email address. */
		EmailRouterAccessApproval: OptionSet.Queue.EmailRouterAccessApproval | null;
		/** This attribute is no longer used. The data is now in the Mailbox.UserName attribute. */
		readonly EmailUsername: string | null;
		/** The default image for the entity. */
		EntityImage: string | null;
		EntityImage_Timestamp: number | null;
		EntityImage_URL: string | null;
		/** For internal use only. */
		readonly EntityImageId: string | null;
		/** Exchange rate for the currency associated with the queue with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** Information that specifies whether a queue is to ignore unsolicited email (deprecated). */
		IgnoreUnsolicitedEmail: boolean | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Incoming email delivery method for the queue. */
		IncomingEmailDeliveryMethod: OptionSet.Queue.IncomingEmailDeliveryMethod | null;
		/** Convert Incoming Email To Activities */
		IncomingEmailFilteringMethod: OptionSet.Queue.IncomingEmailFilteringMethod | null;
		/** Shows the status of approval of the email address by O365 Admin. */
		readonly IsEmailAddressApprovedByO365Admin: boolean | null;
		/** Indication of whether a queue is the fax delivery queue. */
		readonly IsFaxQueue: boolean | null;
		/** Unique identifier of the user who last modified the queue. */
		readonly ModifiedBy: string | null;
		/** Date and time when the queue was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the queue. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the queue. */
		Name: string | null;
		/** Number of Queue items associated with the queue. */
		readonly NumberOfItems: number | null;
		/** Number of Members associated with the queue. */
		readonly NumberOfMembers: number | null;
		/** Unique identifier of the organization associated with the queue. */
		readonly OrganizationId: string | null;
		/** Outgoing email delivery method for the queue. */
		OutgoingEmailDeliveryMethod: OptionSet.Queue.OutgoingEmailDeliveryMethod | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the queue. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the queue. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the queue. */
		readonly OwningUser: string | null;
		/** Unique identifier of the owner of the queue. */
		PrimaryUserId: string | null;
		/** Unique identifier of the queue. */
		QueueId: string | null;
		/** Type of queue that is automatically assigned when a user or queue is created. The type can be public, private, or work in process. */
		readonly QueueTypeCode: OptionSet.Queue.QueueTypeCode | null;
		/** Select whether the queue is public or private. A public queue can be viewed by all. A private queue can be viewed only by the members added to the queue. */
		QueueViewType: OptionSet.Queue.QueueViewType | null;
		/** Status of the queue. */
		StateCode: OptionSet.Queue.StateCode | null;
		/** Reason for the status of the queue. */
		StatusCode: OptionSet.Queue.StatusCode | null;
		/** Unique identifier of the currency associated with the queue. */
		TransactionCurrencyId: string | null;
		/** Version number of the queue. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** This attribute is no longer used. The data is now in the Mailbox.AllowEmailConnectorToUseCredentials attribute. */
			readonly AllowEmailCredentials: string;
			/** Unique identifier of the business unit with which the queue is associated. */
			readonly BusinessUnitId: string;
			/** Unique identifier of the user who created the queue record. */
			readonly CreatedBy: string;
			/** Date and time when the queue was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the queue. */
			readonly CreatedOnBehalfBy: string;
			/** Select the mailbox associated with this queue. */
			readonly DefaultMailbox: string;
			/** Description of the queue. */
			readonly Description: string;
			/** Email address that is associated with the queue. */
			readonly EMailAddress: string;
			/** This attribute is no longer used. The data is now in the Mailbox.Password attribute. */
			readonly EmailPassword: string;
			/** Shows the status of the primary email address. */
			readonly EmailRouterAccessApproval: string;
			/** This attribute is no longer used. The data is now in the Mailbox.UserName attribute. */
			readonly EmailUsername: string;
			/** The default image for the entity. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** For internal use only. */
			readonly EntityImageId: string;
			/** Exchange rate for the currency associated with the queue with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Information that specifies whether a queue is to ignore unsolicited email (deprecated). */
			readonly IgnoreUnsolicitedEmail: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Incoming email delivery method for the queue. */
			readonly IncomingEmailDeliveryMethod: string;
			/** Convert Incoming Email To Activities */
			readonly IncomingEmailFilteringMethod: string;
			/** Shows the status of approval of the email address by O365 Admin. */
			readonly IsEmailAddressApprovedByO365Admin: string;
			/** Indication of whether a queue is the fax delivery queue. */
			readonly IsFaxQueue: string;
			/** Unique identifier of the user who last modified the queue. */
			readonly ModifiedBy: string;
			/** Date and time when the queue was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the queue. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the queue. */
			readonly Name: string;
			/** Number of Queue items associated with the queue. */
			readonly NumberOfItems: string;
			/** Number of Members associated with the queue. */
			readonly NumberOfMembers: string;
			/** Unique identifier of the organization associated with the queue. */
			readonly OrganizationId: string;
			/** Outgoing email delivery method for the queue. */
			readonly OutgoingEmailDeliveryMethod: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the queue. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the queue. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the queue. */
			readonly OwningUser: string;
			/** Unique identifier of the owner of the queue. */
			readonly PrimaryUserId: string;
			/** Unique identifier of the queue. */
			readonly QueueId: string;
			/** Type of queue that is automatically assigned when a user or queue is created. The type can be public, private, or work in process. */
			readonly QueueTypeCode: string;
			/** Select whether the queue is public or private. A public queue can be viewed by all. A private queue can be viewed only by the members added to the queue. */
			readonly QueueViewType: string;
			/** Status of the queue. */
			readonly StateCode: string;
			/** Reason for the status of the queue. */
			readonly StatusCode: string;
			/** Unique identifier of the currency associated with the queue. */
			readonly TransactionCurrencyId: string;
			/** Version number of the queue. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Queue {
		enum EmailRouterAccessApproval {
			/** Approved = 1*/
			Approved = 1,
			/** Empty = 0*/
			Empty = 0,
			/** Pending_Approval = 2*/
			Pending_Approval = 2,
			/** Rejected = 3*/
			Rejected = 3
		}
		enum IncomingEmailDeliveryMethod {
			/** Forward_Mailbox = 3*/
			Forward_Mailbox = 3,
			/** None = 0*/
			None = 0,
			/** Server_Side_Synchronization_or_Email_Router = 2*/
			Server_Side_Synchronization_or_Email_Router = 2
		}
		enum IncomingEmailFilteringMethod {
			/** All_email_messages = 0*/
			All_email_messages = 0,
			/** Email_messages_from_Dynamics_365_Leads_Contacts_and_Accounts = 2*/
			Email_messages_from_Dynamics_365_Leads_Contacts_and_Accounts = 2,
			/** Email_messages_from_Dynamics_365_records_that_are_email_enabled = 3*/
			Email_messages_from_Dynamics_365_records_that_are_email_enabled = 3,
			/** Email_messages_in_response_to_Dynamics_365_email = 1*/
			Email_messages_in_response_to_Dynamics_365_email = 1,
			/** No_email_messages = 4*/
			No_email_messages = 4
		}
		enum OutgoingEmailDeliveryMethod {
			/** None = 0*/
			None = 0,
			/** Server_Side_Synchronization_or_Email_Router = 2*/
			Server_Side_Synchronization_or_Email_Router = 2
		}
		enum QueueTypeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum QueueViewType {
			/** Private = 1*/
			Private = 1,
			/** Public = 0*/
			Public = 0
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