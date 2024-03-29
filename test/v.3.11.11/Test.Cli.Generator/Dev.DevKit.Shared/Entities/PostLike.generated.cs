﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.PostLikeOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class PostLike : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string OrganizationId = "organizationid";
			public const string PostId = "postid";
			public const string PostLikeId = "postlikeid";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
		}

		public const string EntityLogicalName = "postlike";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 8006;

		[DebuggerNonUserCode()]
		public PostLike()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PostLike(Guid PostLikeId)
		{
			Entity = new Entity(EntityLogicalName, PostLikeId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PostLike(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PostLike(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PostLike(Entity entity, Entity merge)
		{
			Entity = entity;
			foreach (var property in merge?.Attributes)
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PostLike(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the record was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Unique identifier of the organization associated with the solution.</para>
		/// <para>ReadOnly - Lookup to organization</para>
		/// <para>Organization</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}

		/// <summary>
		/// <para>Unique identifier of the post with which the like is associated.</para>
		/// <para>Lookup to post</para>
		/// <para>Post</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference PostId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.PostId); }
			set { Entity.Attributes[Fields.PostId] = value; }
		}

		/// <summary>
		/// <para>Shows the ID of the post like.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>PostLikeId</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid PostLikeId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.PostLikeId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Integer - MinValue: -1 - MaxValue: 2,147,483,647</para>
		/// <para>Time Zone Rule Version Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TimeZoneRuleVersionNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TimeZoneRuleVersionNumber); }
			set { Entity.Attributes[Fields.TimeZoneRuleVersionNumber] = value; }
		}

		/// <summary>
		/// <para>Time zone code that was in use when the record was created.</para>
		/// <para>Integer - MinValue: -1 - MaxValue: 2,147,483,647</para>
		/// <para>UTC Conversion Time Zone Code</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? UTCConversionTimeZoneCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.UTCConversionTimeZoneCode); }
			set { Entity.Attributes[Fields.UTCConversionTimeZoneCode] = value; }
		}
	}
}
