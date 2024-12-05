﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ProcessStageApi {
		/**
		* DynamicsCrm.DevKit ProcessStageApi
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
		/** Step metadata for process stage */
		readonly ClientData: string;
		/** The connector associated with the stage. */
		Connector: string;
		/** Whether the stage is a trigger */
		IsTrigger: boolean;
		/** The operation id of the stage */
		OperationId: string;
		/** The operation kind */
		OperationKind: OptionSet.ProcessStage.OperationKind;
		/** The type of the operation */
		OperationType: OptionSet.ProcessStage.OperationType;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Select the business unit that owns the record. */
		readonly OwningBusinessUnit: string;
		/** The parameter name. */
		ParameterName: string;
		/** The parameter value. */
		ParameterValue: string;
		/** The parent stage for the parameter. */
		ParentProcessStageId: string;
		/** Shows the ID of the process. */
		ProcessId: string;
		/** Shows the ID of the process stage record. */
		ProcessStageId: string;
		/** Select the category of the sales process. */
		StageCategory: OptionSet.ProcessStage.StageCategory;
		/** Type a name for the process stage. */
		StageName: string;
		/** Version number of the process stage. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Step metadata for process stage */
			readonly ClientData: string;
			/** The connector associated with the stage. */
			readonly Connector: string;
			/** Whether the stage is a trigger */
			readonly IsTrigger: string;
			/** The operation id of the stage */
			readonly OperationId: string;
			/** The operation kind */
			readonly OperationKind: string;
			/** The type of the operation */
			readonly OperationType: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Select the business unit that owns the record. */
			readonly OwningBusinessUnit: string;
			/** The parameter name. */
			readonly ParameterName: string;
			/** The parameter value. */
			readonly ParameterValue: string;
			/** The parent stage for the parameter. */
			readonly ParentProcessStageId: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Shows the ID of the process stage record. */
			readonly ProcessStageId: string;
			/** Select the category of the sales process. */
			readonly StageCategory: string;
			/** Type a name for the process stage. */
			readonly StageName: string;
			/** Version number of the process stage. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ProcessStage {
		enum OperationKind {
			/** 473330011 */
			AddToTime,
			/** 473330005 */
			Alert,
			/** 473330004 */
			ApiConnection,
			/** 473330013 */
			AzureMonitorAlert,
			/** 473330003 */
			Button,
			/** 473330008 */
			ConvertTimeZone,
			/** 473330007 */
			CurrentTime,
			/** 473330006 */
			EventGrid,
			/** 473330024 */
			FormatNumber,
			/** 473330019 */
			Geofence,
			/** 473330009 */
			GetFutureTime,
			/** 473330010 */
			GetPastTime,
			/** 473330000 */
			Http,
			/** 473330021 */
			IndexOf,
			/** 473330015 */
			JsonToJson,
			/** 473330016 */
			JsonToText,
			/** 473330020 */
			ODataOpenApiConnection,
			/** 473330001 */
			PowerApp,
			/** 473330002 */
			PowerAppV2,
			/** 473330026 */
			PowerPages,
			/** 473330014 */
			SecurityCenterAlert,
			/** 473330025 */
			Skills,
			/** 473330022 */
			Substring,
			/** 473330012 */
			SubtractFromTime,
			/** 473330027 */
			TeamsWebhook,
			/** 473330023 */
			VirtualAgent,
			/** 473330017 */
			XmlToJson,
			/** 473330018 */
			XmlToText
		}
		enum OperationType {
			/** 473330001 */
			ApiApp,
			/** 473330006 */
			ApiConnection,
			/** 473330050 */
			ApiConnectionNotification,
			/** 473330009 */
			ApiConnectionWebhook,
			/** 473330016 */
			ApiManagement,
			/** 473330037 */
			AppendToArrayVariable,
			/** 473330038 */
			AppendToStringVariable,
			/** 473330045 */
			As2Decode,
			/** 473330046 */
			As2Encode,
			/** 473330039 */
			Batch,
			/** 473330051 */
			Changeset,
			/** 473330013 */
			Compose,
			/** 473330035 */
			DecrementVariable,
			/** 473330042 */
			Expression,
			/** 473330025 */
			FlatFileDecoding,
			/** 473330018 */
			FlatFileEncoding,
			/** 473330004 */
			Flow,
			/** 473330022 */
			Foreach,
			/** 473330015 */
			Function,
			/** 473330000 */
			Http,
			/** 473330012 */
			HttpWebhook,
			/** 473330021 */
			If,
			/** 473330034 */
			IncrementVariable,
			/** 473330033 */
			InitializeVariable,
			/** 473330027 */
			IntegrationAccountArtifactLookup,
			/** 473330044 */
			JavascriptCode,
			/** 473330031 */
			Join,
			/** 473330043 */
			Liquid,
			/** 473330008 */
			Manual,
			/** 473330007 */
			OpenApiConnection,
			/** 473330010 */
			OpenApiConnectionWebhook,
			/** 473330029 */
			ParseJson,
			/** 473330014 */
			Query,
			/** 473330002 */
			Recurrence,
			/** 473330020 */
			Request,
			/** 473330011 */
			Response,
			/** 473330048 */
			RosettaNetDecode,
			/** 473330047 */
			RosettaNetEncode,
			/** 473330049 */
			RosettaNetWaitForResponse,
			/** 473330019 */
			Scope,
			/** 473330032 */
			Select,
			/** 473330040 */
			SendToBatch,
			/** 473330036 */
			SetVariable,
			/** 473330041 */
			SlidingWindow,
			/** 473330052 */
			SwiftEncode,
			/** 473330028 */
			Switch,
			/** 473330030 */
			Table,
			/** 473330026 */
			Terminate,
			/** 473330023 */
			Until,
			/** 473330005 */
			Wait,
			/** 473330003 */
			Workflow,
			/** 473330017 */
			XmlValidation,
			/** 473330024 */
			Xslt
		}
		enum PrimaryEntityTypeCode {
		}
		enum StageCategory {
			/** 7 */
			Approval,
			/** 3 */
			Close,
			/** 1 */
			Develop,
			/** 4 */
			Identify,
			/** 2 */
			Propose,
			/** 0 */
			Qualify,
			/** 5 */
			Research,
			/** 6 */
			Resolve
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