﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.UserSearchFacetOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class UserSearchFacet : EntityBase
	{
		public struct Fields
		{
			public const string AttributeName = "attributename";
			public const string EntityName = "entityname";
			public const string FacetOrder = "facetorder";
			public const string SystemUserId = "systemuserid";
			public const string UserSearchFacetId = "usersearchfacetid";
		}

		public const string EntityLogicalName = "usersearchfacet";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 52;

		[DebuggerNonUserCode()]
		public UserSearchFacet()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public UserSearchFacet(Guid UserSearchFacetId)
		{
			Entity = new Entity(EntityLogicalName, UserSearchFacetId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public UserSearchFacet(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public UserSearchFacet(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public UserSearchFacet(Entity entity, Entity merge)
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
		public UserSearchFacet(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>String - MaxLength: 128</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AttributeName
		{
			get { return Entity.GetAttributeValue<string>(Fields.AttributeName); }
			set { Entity.Attributes[Fields.AttributeName] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 128</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string EntityName
		{
			get { return Entity.GetAttributeValue<string>(Fields.EntityName); }
			set { Entity.Attributes[Fields.EntityName] = value; }
		}

		/// <summary>
		/// <para>Integer - MinValue: 1 - MaxValue: 4</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? FacetOrder
		{
			get { return Entity.GetAttributeValue<int?>(Fields.FacetOrder); }
			set { Entity.Attributes[Fields.FacetOrder] = value; }
		}

		/// <summary>
		/// <para>Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SystemUserId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SystemUserId); }
			set { Entity.Attributes[Fields.SystemUserId] = value; }
		}

		/// <summary>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid UserSearchFacetId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.UserSearchFacetId] = value;
				Entity.Id = value;
			}
		}
	}
}
