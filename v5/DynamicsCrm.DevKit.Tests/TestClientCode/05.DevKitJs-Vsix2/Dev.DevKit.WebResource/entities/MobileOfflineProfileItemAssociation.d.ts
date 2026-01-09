//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMobile_Offline_Profile_Item_Association {
		interface tab_GENERALINFORMATION_TAB_Sections {
			General: DevKit.Controls.Section;
		}
		/** General Information */
		interface tab_GENERALINFORMATION_TAB extends DevKit.Controls.ITab {
			Section: tab_GENERALINFORMATION_TAB_Sections;
		}
		interface Tabs {
			/** General Information */
			GENERALINFORMATION_TAB: tab_GENERALINFORMATION_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Enter the name of the mobile offline profile item association. */
			Name: DevKit.Controls.String;
			/** Display name of entity relationship */
			RelationshipName: DevKit.Controls.String;
			/** List of relationships of entity selected in parent profile item */
			SelectedRelationShipsSchema: DevKit.Controls.OptionSet;
		}
	}
	export class FormMobile_Offline_Profile_Item_Association extends DevKit.IForm {
		/**
		* Mobile Offline Profile Item Association [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Mobile_Offline_Profile_Item_Association */
		Body: DevKit.FormMobile_Offline_Profile_Item_Association.Body;
	}
	export class MobileOfflineProfileItemAssociationApi {
		/**
		* DynamicsCrm.DevKit MobileOfflineProfileItemAssociationApi
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
		/** For internal use only. */
		readonly ComponentState: OptionSet.MobileOfflineProfileItemAssociation.ComponentState | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Version in which the Mobile offline Profile Item Association is introduced. */
		IntroducedVersion: string | null;
		/** For internal use only. */
		readonly IsManaged: boolean | null;
		/** Information about whether profile item association is validated or not */
		readonly IsValidated: boolean | null;
		/** Unique identifier of the mobile offline profile item associaition. */
		MobileOfflineProfileItemAssociationId: string | null;
		/** For Internal Use Only */
		readonly MobileOfflineProfileItemAssociationIdUnique: string | null;
		/** Id of the parent profile item. */
		MobileOfflineProfileItemId: string | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Enter the name of the mobile offline profile item association. */
		Name: string | null;
		/** Unique identifier of the organization associated with the Mobile Offline Profile Item Association. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Shows the ID of the process. */
		ProcessId: string | null;
		/** Profile item association entity filter criteria. */
		ProfileItemAssociationEntityFilter: string | null;
		/** Displays the last published date time. */
		readonly PublishedOn_UtcDateAndTime: Date | null;
		/** Internal Use Only */
		RelationshipData: string | null;
		/** Entity relationship schema name */
		RelationshipDisplayName: string | null;
		/** Shows the relationship */
		RelationshipId: string | null;
		/** Display name of entity relationship */
		readonly RelationshipName: string | null;
		/** List of relationships of entity selected in parent profile item */
		SelectedRelationShipsSchema: OptionSet.MobileOfflineProfileItemAssociation.SelectedRelationShipsSchema | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Shows the ID of the stage. */
		StageId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TraversedPath: string | null;
		/** Version number of the Mobile Offline profileitemassociation. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Version in which the Mobile offline Profile Item Association is introduced. */
			readonly IntroducedVersion: string;
			/** For internal use only. */
			readonly IsManaged: string;
			/** Information about whether profile item association is validated or not */
			readonly IsValidated: string;
			/** Unique identifier of the mobile offline profile item associaition. */
			readonly MobileOfflineProfileItemAssociationId: string;
			/** For Internal Use Only */
			readonly MobileOfflineProfileItemAssociationIdUnique: string;
			/** Id of the parent profile item. */
			readonly MobileOfflineProfileItemId: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Enter the name of the mobile offline profile item association. */
			readonly Name: string;
			/** Unique identifier of the organization associated with the Mobile Offline Profile Item Association. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Profile item association entity filter criteria. */
			readonly ProfileItemAssociationEntityFilter: string;
			/** Displays the last published date time. */
			readonly PublishedOn_UtcDateAndTime: string;
			/** Internal Use Only */
			readonly RelationshipData: string;
			/** Entity relationship schema name */
			readonly RelationshipDisplayName: string;
			/** Shows the relationship */
			readonly RelationshipId: string;
			/** Display name of entity relationship */
			readonly RelationshipName: string;
			/** List of relationships of entity selected in parent profile item */
			readonly SelectedRelationShipsSchema: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Shows the ID of the stage. */
			readonly StageId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Version number of the Mobile Offline profileitemassociation. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace MobileOfflineProfileItemAssociation {
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
		enum SelectedRelationShipsSchema {
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