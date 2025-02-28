﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:01:22
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.SyncErrorOptionSets
{
	public enum ErrorType
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Bản ghi đã tồn tại</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Ban_ghi_da_ton_tai = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Không tìm thấy bản ghi</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Khong_tim_thay_ban_ghi = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại khác</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Loai_khac = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Xung đột</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Xung_dot = 0
	}
	public enum StateCode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã giải quyết</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Da_giai_quyet = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Hiện hoạt</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Hien_hoat = 0
	}
	public enum StatusCode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã khắc phục</para>
		/// <para><strong>Value</strong>: 1</para>
		/// <para><strong>StateCode.Da_giai_quyet</strong></para>
		/// </summary>
		Da_khac_phuc = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Hiện hoạt</para>
		/// <para><strong>Value</strong>: 0</para>
		/// <para><strong>StateCode.Hien_hoat</strong></para>
		/// </summary>
		Hien_hoat = 0
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class SyncError : EntityBase
	{
		public struct Fields
		{
			public const string Action = "action";
			public const string ActionData = "actiondata";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string ErrorCode = "errorcode";
			public const string ErrorDetail = "errordetail";
			public const string ErrorMessage = "errormessage";
			public const string ErrorTime = "errortime";
			public const string ErrorType = "errortype";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string RegardingObjectId = "regardingobjectid";
			public const string RequestData = "requestdata";
			public const string StateCode = "statecode";
			public const string StatusCode = "statuscode";
			public const string SyncErrorId = "syncerrorid";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "syncerror";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9869;
		public const string EntityCollectionSchemaName = "SyncErrors";
		public const string EntityDisplayCollectionName = "Lỗi đồng bộ";
		public const string DisplayName = "Lỗi đồng bộ";
		public const string EntitySetName = "syncerrors";
		public const string EntityLogicalCollectionName = "syncerrors";
		public const string EntityPrimaryIdAttribute = "syncerrorid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "name";
		public const string EntitySchemaName = "SyncError";
		[DebuggerNonUserCode()]
		public SyncError()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SyncError(Guid SyncErrorId)
		{
			Entity = new Entity(EntityLogicalName, SyncErrorId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SyncError(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SyncError"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public SyncError(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SyncError"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SyncError(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SyncError(preEntity, targetEntity) with targetEntity = null");
			if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			Entity = CloneThisEntity(preEntity);
			foreach (var property in targetEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SyncError"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SyncError(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SyncError(preEntity, targetEntity, postEntity) with targetEntity = null");
			if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			if (postEntity == null) postEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			Entity = CloneThisEntity(preEntity);
			foreach (var property in targetEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			foreach (var property in postEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SyncError(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Hành động</para>
		/// <para><strong>Description</strong>: Tên hành động đã xảy ra lỗi đồng bộ</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Action
		{
			get { return Entity.GetAttributeValue<string>(Fields.Action); }
			set { Entity.Attributes[Fields.Action] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Dữ liệu hành động</para>
		/// <para><strong>Description</strong>: Hiển thị dữ liệu hành động</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 10,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ActionData
		{
			get { return Entity.GetAttributeValue<string>(Fields.ActionData); }
			set { Entity.Attributes[Fields.ActionData] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đã tạo lỗi đồng bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày tạo</para>
		/// <para><strong>Description</strong>: Ngày và giờ tạo lỗi đồng bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã tạo lỗi đồng bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mô tả</para>
		/// <para><strong>Description</strong>: Nhập mô tả ngắn gọn của lỗi đồng bộ.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mã Lỗi</para>
		/// <para><strong>Description</strong>: Hiển thị mã lỗi.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ErrorCode
		{
			get { return Entity.GetAttributeValue<string>(Fields.ErrorCode); }
			set { Entity.Attributes[Fields.ErrorCode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Chi tiết lỗi</para>
		/// <para><strong>Description</strong>: Mô tả lỗi từ ngoại lệ</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ErrorDetail
		{
			get { return Entity.GetAttributeValue<string>(Fields.ErrorDetail); }
			set { Entity.Attributes[Fields.ErrorDetail] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thông báo lỗi</para>
		/// <para><strong>Description</strong>: Thông báo lỗi của ngoại lệ</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ErrorMessage
		{
			get { return Entity.GetAttributeValue<string>(Fields.ErrorMessage); }
			set { Entity.Attributes[Fields.ErrorMessage] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thời gian Lỗi</para>
		/// <para><strong>Description</strong>: Ngày và giờ thực thi yêu cầu upsync trên máy chủ CRM</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ErrorTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ErrorTime); }
			set { Entity.Attributes[Fields.ErrorTime] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại Lỗi</para>
		/// <para><strong>Description</strong>: Chọn loại lỗi ưu tiên.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.SyncErrorOptionSets.ErrorType"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SyncErrorOptionSets.ErrorType? ErrorType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ErrorType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SyncErrorOptionSets.ErrorType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.ErrorType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.ErrorType] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người sửa đổi</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng sửa đổi lần cuối lỗi đồng bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày sửa đổi</para>
		/// <para><strong>Description</strong>: Ngày và giờ sửa đổi lần cuối lỗi đồng bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người sửa đổi (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối lỗi đồng bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thực thể</para>
		/// <para><strong>Description</strong>: Tên thực thể của bản ghi đã xảy ra lỗi đồng bộ</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Chủ sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng hoặc nhóm sở hữu lỗi đồng bộ.</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/>, <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Đơn vị kinh doanh sở hữu</para>
		/// <para><strong>Description</strong>: Đơn vị kinh doanh sở hữu lỗi đồng bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Nhóm sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của nhóm sở hữu lỗi đồng bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người dùng sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng sở hữu lỗi đồng bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Bản ghi</para>
		/// <para><strong>Description</strong>: Chọn bản ghi liên quan đến lỗi đồng bộ.</para>
		/// <para><strong>Lookup</strong>: <see cref="account"/>, <see cref="activityfileattachment"/>, <see cref="activitymimeattachment"/>, <see cref="activityparty"/>, <see cref="adx_externalidentity"/>, <see cref="adx_invitation"/>, <see cref="adx_inviteredemption"/>, <see cref="adx_portalcomment"/>, <see cref="adx_setting"/>, <see cref="adx_webformsession"/>, <see cref="aicopilot"/>, <see cref="aiplugin"/>, <see cref="aipluginauth"/>, <see cref="aipluginconversationstarter"/>, <see cref="aipluginconversationstartermapping"/>, <see cref="aipluginexternalschema"/>, <see cref="aipluginexternalschemaproperty"/>, <see cref="aiplugingovernance"/>, <see cref="aiplugingovernanceext"/>, <see cref="aiplugininstance"/>, <see cref="aipluginoperation"/>, <see cref="aipluginoperationparameter"/>, <see cref="aipluginoperationresponsetemplate"/>, <see cref="aiplugintitle"/>, <see cref="aipluginusersetting"/>, <see cref="annotation"/>, <see cref="appaction"/>, <see cref="appactionmigration"/>, <see cref="appactionrule"/>, <see cref="appelement"/>, <see cref="application"/>, <see cref="applicationuser"/>, <see cref="appmodulecomponentedge"/>, <see cref="appmodulecomponentnode"/>, <see cref="appointment"/>, <see cref="appsetting"/>, <see cref="appusersetting"/>, <see cref="archivecleanupinfo"/>, <see cref="archivecleanupoperation"/>, <see cref="attachment"/>, <see cref="attributeimageconfig"/>, <see cref="attributemaskingrule"/>, <see cref="bot"/>, <see cref="botcomponent"/>, <see cref="botcomponentcollection"/>, <see cref="bulkarchiveconfig"/>, <see cref="bulkarchivefailuredetail"/>, <see cref="bulkarchiveoperation"/>, <see cref="bulkarchiveoperationdetail"/>, <see cref="businessdatalocalizedlabel"/>, <see cref="businessunit"/>, <see cref="canvasappextendedmetadata"/>, <see cref="card"/>, <see cref="cascadegrantrevokeaccessrecordstracker"/>, <see cref="cascadegrantrevokeaccessversiontracker"/>, <see cref="catalog"/>, <see cref="catalogassignment"/>, <see cref="category"/>, <see cref="channelaccessprofile"/>, <see cref="channelaccessprofilerule"/>, <see cref="channelaccessprofileruleitem"/>, <see cref="chat"/>, <see cref="comment"/>, <see cref="connection"/>, <see cref="connectioninstance"/>, <see cref="connectionreference"/>, <see cref="connectionrole"/>, <see cref="connector"/>, <see cref="contact"/>, <see cref="conversationtranscript"/>, <see cref="copilotexamplequestion"/>, <see cref="copilotglossaryterm"/>, <see cref="copilotsynonyms"/>, <see cref="credential"/>, <see cref="customapi"/>, <see cref="customapirequestparameter"/>, <see cref="customapiresponseproperty"/>, <see cref="customeraddress"/>, <see cref="datalakefolder"/>, <see cref="datalakefolderpermission"/>, <see cref="datalakeworkspace"/>, <see cref="datalakeworkspacepermission"/>, <see cref="dataprocessingconfiguration"/>, <see cref="delegatedauthorization"/>, <see cref="deleteditemreference"/>, <see cref="desktopflowbinary"/>, <see cref="desktopflowmodule"/>, <see cref="duplicaterule"/>, <see cref="duplicaterulecondition"/>, <see cref="dvfilesearch"/>, <see cref="dvfilesearchattribute"/>, <see cref="dvfilesearchentity"/>, <see cref="dvtablesearch"/>, <see cref="dvtablesearchattribute"/>, <see cref="dvtablesearchentity"/>, <see cref="email"/>, <see cref="emailserverprofile"/>, <see cref="enablearchivalrequest"/>, <see cref="entityanalyticsconfig"/>, <see cref="entityimageconfig"/>, <see cref="entityindex"/>, <see cref="entityrecordfilter"/>, <see cref="environmentvariabledefinition"/>, <see cref="environmentvariablevalue"/>, <see cref="expiredprocess"/>, <see cref="exportedexcel"/>, <see cref="exportsolutionupload"/>, <see cref="externalparty"/>, <see cref="externalpartyitem"/>, <see cref="fabricaiskill"/>, <see cref="fax"/>, <see cref="featurecontrolsetting"/>, <see cref="federatedknowledgeconfiguration"/>, <see cref="federatedknowledgeentityconfiguration"/>, <see cref="feedback"/>, <see cref="fieldpermission"/>, <see cref="fieldsecurityprofile"/>, <see cref="fileattachment"/>, <see cref="flowcapacityassignment"/>, <see cref="flowcredentialapplication"/>, <see cref="flowevent"/>, <see cref="flowmachine"/>, <see cref="flowmachinegroup"/>, <see cref="flowmachineimage"/>, <see cref="flowmachineimageversion"/>, <see cref="flowmachinenetwork"/>, <see cref="flowsession"/>, <see cref="fxexpression"/>, <see cref="goal"/>, <see cref="goalrollupquery"/>, <see cref="holidaywrapper"/>, <see cref="importmap"/>, <see cref="indexattributes"/>, <see cref="internaladdress"/>, <see cref="internalcatalogassignment"/>, <see cref="kbarticle"/>, <see cref="kbarticletemplate"/>, <see cref="keyvaultreference"/>, <see cref="knowledgearticle"/>, <see cref="knowledgearticleviews"/>, <see cref="knowledgebaserecord"/>, <see cref="letter"/>, <see cref="mailbox"/>, <see cref="mailmergetemplate"/>, <see cref="mainfewshot"/>, <see cref="makerfewshot"/>, <see cref="managedidentity"/>, <see cref="maskingrule"/>, <see cref="metadataforarchival"/>, <see cref="metric"/>, <see cref="mobileofflineprofileextension"/>, <see cref="msdynce_botcontent"/>, <see cref="msdyn_aibdataset"/>, <see cref="msdyn_aibdatasetfile"/>, <see cref="msdyn_aibdatasetrecord"/>, <see cref="msdyn_aibdatasetscontainer"/>, <see cref="msdyn_aibfeedbackloop"/>, <see cref="msdyn_aibfile"/>, <see cref="msdyn_aibfileattacheddata"/>, <see cref="msdyn_aiconfiguration"/>, <see cref="msdyn_aievent"/>, <see cref="msdyn_aifptrainingdocument"/>, <see cref="msdyn_aimodel"/>, <see cref="msdyn_aiodimage"/>, <see cref="msdyn_aiodlabel"/>, <see cref="msdyn_aiodtrainingboundingbox"/>, <see cref="msdyn_aiodtrainingimage"/>, <see cref="msdyn_aitemplate"/>, <see cref="msdyn_analysiscomponent"/>, <see cref="msdyn_analysisjob"/>, <see cref="msdyn_analysisoverride"/>, <see cref="msdyn_analysisresult"/>, <see cref="msdyn_analysisresultdetail"/>, <see cref="msdyn_appinsightsmetadata"/>, <see cref="msdyn_customcontrolextendedsettings"/>, <see cref="msdyn_dataflow"/>, <see cref="msdyn_dataflowconnectionreference"/>, <see cref="msdyn_dataflowrefreshhistory"/>, <see cref="msdyn_dataflowtemplate"/>, <see cref="msdyn_dataflow_datalakefolder"/>, <see cref="msdyn_dmsrequest"/>, <see cref="msdyn_dmsrequeststatus"/>, <see cref="msdyn_dmssyncrequest"/>, <see cref="msdyn_dmssyncstatus"/>, <see cref="msdyn_entitylinkchatconfiguration"/>, <see cref="msdyn_entityrefreshhistory"/>, <see cref="msdyn_favoriteknowledgearticle"/>, <see cref="msdyn_federatedarticle"/>, <see cref="msdyn_federatedarticleincident"/>, <see cref="msdyn_fileupload"/>, <see cref="msdyn_flow_actionapprovalmodel"/>, <see cref="msdyn_flow_approval"/>, <see cref="msdyn_flow_approvalrequest"/>, <see cref="msdyn_flow_approvalresponse"/>, <see cref="msdyn_flow_approvalstep"/>, <see cref="msdyn_flow_awaitallactionapprovalmodel"/>, <see cref="msdyn_flow_awaitallapprovalmodel"/>, <see cref="msdyn_flow_basicapprovalmodel"/>, <see cref="msdyn_flow_flowapproval"/>, <see cref="msdyn_helppage"/>, <see cref="msdyn_insightsstorevirtualentity"/>, <see cref="msdyn_integratedsearchprovider"/>, <see cref="msdyn_kalanguagesetting"/>, <see cref="msdyn_kbattachment"/>, <see cref="msdyn_kmfederatedsearchconfig"/>, <see cref="msdyn_kmpersonalizationsetting"/>, <see cref="msdyn_knowledgearticleimage"/>, <see cref="msdyn_knowledgearticletemplate"/>, <see cref="msdyn_knowledgeassetconfiguration"/>, <see cref="msdyn_knowledgeconfiguration"/>, <see cref="msdyn_knowledgeinteractioninsight"/>, <see cref="msdyn_knowledgemanagementsetting"/>, <see cref="msdyn_knowledgepersonalfilter"/>, <see cref="msdyn_knowledgesearchfilter"/>, <see cref="msdyn_knowledgesearchinsight"/>, <see cref="msdyn_mobileapp"/>, <see cref="msdyn_modulerundetail"/>, <see cref="msdyn_pmanalysishistory"/>, <see cref="msdyn_pmbusinessruleautomationconfig"/>, <see cref="msdyn_pmcalendar"/>, <see cref="msdyn_pmcalendarversion"/>, <see cref="msdyn_pminferredtask"/>, <see cref="msdyn_pmprocessextendedmetadataversion"/>, <see cref="msdyn_pmprocesstemplate"/>, <see cref="msdyn_pmprocessusersettings"/>, <see cref="msdyn_pmprocessversion"/>, <see cref="msdyn_pmrecording"/>, <see cref="msdyn_pmsimulation"/>, <see cref="msdyn_pmtemplate"/>, <see cref="msdyn_pmview"/>, <see cref="msdyn_richtextfile"/>, <see cref="msdyn_salesforcestructuredobject"/>, <see cref="msdyn_salesforcestructuredqnaconfig"/>, <see cref="msdyn_schedule"/>, <see cref="msdyn_serviceconfiguration"/>, <see cref="msdyn_slakpi"/>, <see cref="msdyn_solutionhealthrule"/>, <see cref="msdyn_solutionhealthruleargument"/>, <see cref="msdyn_solutionhealthruleset"/>, <see cref="msdyn_tour"/>, <see cref="msdyn_virtualtablecolumncandidate"/>, <see cref="msdyn_workflowactionstatus"/>, <see cref="msgraphresourcetosubscription"/>, <see cref="mspcat_catalogsubmissionfiles"/>, <see cref="mspcat_packagestore"/>, <see cref="newprocess"/>, <see cref="offlinecommanddefinition"/>, <see cref="organization"/>, <see cref="organizationdatasyncfnostate"/>, <see cref="organizationdatasyncstate"/>, <see cref="organizationdatasyncsubscription"/>, <see cref="organizationdatasyncsubscriptionentity"/>, <see cref="organizationdatasyncsubscriptionfnotable"/>, <see cref="organizationsetting"/>, <see cref="package"/>, <see cref="packagehistory"/>, <see cref="pdfsetting"/>, <see cref="phonecall"/>, <see cref="plannerbusinessscenario"/>, <see cref="plannersyncaction"/>, <see cref="pluginpackage"/>, <see cref="position"/>, <see cref="postfollow"/>, <see cref="powerbidataset"/>, <see cref="powerbidatasetapdx"/>, <see cref="powerbimashupparameter"/>, <see cref="powerbireport"/>, <see cref="powerbireportapdx"/>, <see cref="powerfxrule"/>, <see cref="powerpagecomponent"/>, <see cref="powerpagesite"/>, <see cref="powerpagesitelanguage"/>, <see cref="powerpagesitepublished"/>, <see cref="powerpagesscanreport"/>, <see cref="privilegecheckerlog"/>, <see cref="privilegecheckerrun"/>, <see cref="privilegesremovalsetting"/>, <see cref="processsession"/>, <see cref="processstage"/>, <see cref="processstageparameter"/>, <see cref="processtrigger"/>, <see cref="provisionlanguageforuser"/>, <see cref="publisher"/>, <see cref="queue"/>, <see cref="queueitem"/>, <see cref="reconciliationentityinfo"/>, <see cref="reconciliationentitystepinfo"/>, <see cref="reconciliationinfo"/>, <see cref="recordfilter"/>, <see cref="recurringappointmentmaster"/>, <see cref="recyclebinconfig"/>, <see cref="relationshipattribute"/>, <see cref="report"/>, <see cref="reportcategory"/>, <see cref="reportparameter"/>, <see cref="retaineddataexcel"/>, <see cref="retentioncleanupinfo"/>, <see cref="retentioncleanupoperation"/>, <see cref="retentionconfig"/>, <see cref="retentionfailuredetail"/>, <see cref="retentionoperation"/>, <see cref="retentionoperationdetail"/>, <see cref="revokeinheritedaccessrecordstracker"/>, <see cref="role"/>, <see cref="roleeditorlayout"/>, <see cref="rollupfield"/>, <see cref="savedquery"/>, <see cref="savedqueryvisualization"/>, <see cref="searchattributesettings"/>, <see cref="searchcustomanalyzer"/>, <see cref="searchrelationshipsettings"/>, <see cref="serviceplan"/>, <see cref="serviceplanmapping"/>, <see cref="settingdefinition"/>, <see cref="sharedlinksetting"/>, <see cref="sharedobject"/>, <see cref="sharedworkspace"/>, <see cref="sharedworkspacepool"/>, <see cref="sharepointdocumentlocation"/>, <see cref="sharepointsite"/>, <see cref="sideloadedaiplugin"/>, <see cref="sla"/>, <see cref="slaitem"/>, <see cref="slakpiinstance"/>, <see cref="socialactivity"/>, <see cref="socialprofile"/>, <see cref="solution"/>, <see cref="solutioncomponentattributeconfiguration"/>, <see cref="solutioncomponentbatchconfiguration"/>, <see cref="solutioncomponentconfiguration"/>, <see cref="solutioncomponentrelationshipconfiguration"/>, <see cref="stagedentity"/>, <see cref="stagedentityattribute"/>, <see cref="stagedmetadataasyncoperation"/>, <see cref="stagesolutionupload"/>, <see cref="subject"/>, <see cref="supportusertable"/>, <see cref="synapsedatabase"/>, <see cref="synapselinkexternaltablestate"/>, <see cref="synapselinkprofile"/>, <see cref="synapselinkprofileentity"/>, <see cref="synapselinkprofileentitystate"/>, <see cref="synapselinkschedule"/>, <see cref="syncerror"/>, <see cref="systemuser"/>, <see cref="systemuserauthorizationchangetracker"/>, <see cref="task"/>, <see cref="tdsmetadata"/>, <see cref="team"/>, <see cref="teammobileofflineprofilemembership"/>, <see cref="teamtemplate"/>, <see cref="template"/>, <see cref="territory"/>, <see cref="transactioncurrency"/>, <see cref="translationprocess"/>, <see cref="usermobileofflineprofilemembership"/>, <see cref="userquery"/>, <see cref="userqueryvisualization"/>, <see cref="userrating"/>, <see cref="viewasexamplequestion"/>, <see cref="virtualentitymetadata"/>, <see cref="workflow"/>, <see cref="workflowbinary"/>, <see cref="workqueue"/>, <see cref="workqueueitem"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference RegardingObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.RegardingObjectId); }
			set { Entity.Attributes[Fields.RegardingObjectId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Yêu cầu Dữ liệu</para>
		/// <para><strong>Description</strong>: Yêu cầu dữ liệu cho thực thể có lỗi đồng bộ.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string RequestData
		{
			get { return Entity.GetAttributeValue<string>(Fields.RequestData); }
			set { Entity.Attributes[Fields.RequestData] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái</para>
		/// <para><strong>Description</strong>: Thể hiện lỗi đồng bộ ở trạng thái hiện hoạt hay đã giải quyết.</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.SyncErrorOptionSets.StateCode"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.SyncErrorOptionSets.StateCode.Hien_hoat"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SyncErrorOptionSets.StateCode? StateCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StateCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SyncErrorOptionSets.StateCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StateCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StateCode] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Lý do dẫn đến trạng thái</para>
		/// <para><strong>Description</strong>: Chọn trạng thái lỗi đồng bộ.</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.SyncErrorOptionSets.StatusCode"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.SyncErrorOptionSets.StatusCode.Hien_hoat"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SyncErrorOptionSets.StatusCode? StatusCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StatusCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SyncErrorOptionSets.StatusCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StatusCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StatusCode] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ID Lỗi Đồng bộ</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của lỗi đồng bộ.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid SyncErrorId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.SyncErrorId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Số phiên bản</para>
		/// <para><strong>Description</strong>: Hiển thị số phiên bản của lỗi đồng bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}