//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormImport_Information {
		interface Tabs {
		}
		interface Body {
			/** Shows who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the import was initiated. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Shows the name of the import job, based on the import file and the entity being imported. */
			Name: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Order in which the import was created. */
			Sequence: DevKit.Controls.Integer;
			/** Shows the reason code that explains the import job's status to identify the job's stage of the import processes, from transforming the data to completed. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormImport_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Import_Information */
		Body: DevKit.FormImport_Information.Body;
		/** The Process of form Import_Information */
		Process: DevKit.FormImport_Information.Process;
		/** The SidePanes of form Import_Information */
		SidePanes: DevKit.SidePanes;
	}
	class ImportApi {
		/**
		* DynamicsCrm.DevKit ImportApi
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
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the import was initiated. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type the email address that the import completion notification must be sent to. */
		EMailAddress: string;
		/** Unique identifier of the import job. */
		ImportId: string;
		/** Information about whether the source of this import job is data import or data migration. */
		IsImport: boolean;
		/** Select whether to create or update records in Microsoft Dynamics 365 during the import job. */
		ModeCode: OptionSet.Import.ModeCode;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows the name of the import job, based on the import file and the entity being imported. */
		Name: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Business unit that owns the import job. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the import. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the import. */
		readonly OwningUser: string;
		/** Select whether to send a notification email message to a selected user after the import is completed. */
		SendNotification: boolean;
		/** Order in which the import was created. */
		readonly Sequence: number;
		/** Shows the status of the import job. By default, import jobs are active and can't be deactivated. */
		readonly StateCode: OptionSet.Import.StateCode;
		/** Shows the reason code that explains the import job's status to identify the job's stage of the import processes, from transforming the data to completed. */
		StatusCode: OptionSet.Import.StatusCode;
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the import was initiated. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type the email address that the import completion notification must be sent to. */
			readonly EMailAddress: string;
			/** Unique identifier of the import job. */
			readonly ImportId: string;
			/** Information about whether the source of this import job is data import or data migration. */
			readonly IsImport: string;
			/** Select whether to create or update records in Microsoft Dynamics 365 during the import job. */
			readonly ModeCode: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows the name of the import job, based on the import file and the entity being imported. */
			readonly Name: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Business unit that owns the import job. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the import. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the import. */
			readonly OwningUser: string;
			/** Select whether to send a notification email message to a selected user after the import is completed. */
			readonly SendNotification: string;
			/** Order in which the import was created. */
			readonly Sequence: string;
			/** Shows the status of the import job. By default, import jobs are active and can't be deactivated. */
			readonly StateCode: string;
			/** Shows the reason code that explains the import job's status to identify the job's stage of the import processes, from transforming the data to completed. */
			readonly StatusCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace Import {
		enum ModeCode {
			/** 0 */
			Create,
			/** 1 */
			Update
		}
		enum OwnerIdType {
		}
		enum StateCode {
			/** 0 */
			Active
		}
		enum StatusCode {
			/** 4 */
			Completed,
			/** 5 */
			Failed,
			/** 3 */
			Importing,
			/** 1 */
			Parsing,
			/** 0 */
			Submitted,
			/** 2 */
			Transforming
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