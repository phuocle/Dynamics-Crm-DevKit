//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_3dmodel_Information {
		interface tab__3dModelGeneralTab_Sections {
			_3dModelNotesSection: DevKit.Controls.Section;
			_3dModelViewerSection: DevKit.Controls.Section;
		}
		interface tab__3dModelGeneralTab extends DevKit.Controls.ITab {
			Section: tab__3dModelGeneralTab_Sections;
		}
		interface Tabs {
			_3dModelGeneralTab: tab__3dModelGeneralTab;
		}
		interface Body {
			Tab: Tabs;
			msdyn_FileType: DevKit.Controls.OptionSet;
			msdyn_FileURL: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_StorageType: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			WebResource_3dViewer: DevKit.Controls.WebResource;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_3dmodel_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_3dmodel_Information */
		Body: DevKit.Formmsdyn_3dmodel_Information.Body;
		/** The Process of form msdyn_3dmodel_Information */
		Process: DevKit.Formmsdyn_3dmodel_Information.Process;
		/** The SidePanes of form msdyn_3dmodel_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_3dmodelApi {
		/**
		* DynamicsCrm.DevKit msdyn_3dmodelApi
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
		/** An image of the three-dimensional model. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for entity instances */
		msdyn_3dmodelId: string;
		msdyn_FileType: OptionSet.msdyn_3dmodel.msdyn_FileType;
		msdyn_FileURL: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_StorageType: OptionSet.msdyn_3dmodel.msdyn_StorageType;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the 3D Model */
		statecode: OptionSet.msdyn_3dmodel.statecode;
		/** Reason for the status of the 3D Model */
		statuscode: OptionSet.msdyn_3dmodel.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
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
			/** An image of the three-dimensional model. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for entity instances */
			readonly msdyn_3dmodelId: string;
			readonly msdyn_FileType: string;
			readonly msdyn_FileURL: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_StorageType: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the 3D Model */
			readonly statecode: string;
			/** Reason for the status of the 3D Model */
			readonly statuscode: string;
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
	namespace msdyn_3dmodel {
		enum msdyn_FileType {
			/** 100000001 */
			_glb,
			/** 100000000 */
			_gltf,
			/** 100000002 */
			_obj
		}
		enum msdyn_StorageType {
			/** 100000000 */
			Note_Attachment,
			/** 100000001 */
			URL
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