using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;

namespace Dev.DevKit.Shared
{
    [DebuggerNonUserCode()]
    public abstract class EntityBase
    {
        protected T GetAliasedValue<T>(string name)
        {
            var aliased = Entity.GetAttributeValue<AliasedValue>(name);
            if (aliased == null) return default(T);
            if (typeof(T) == typeof(EntityReference) && aliased.Value is Guid)
                return (T)(object)new EntityReference(aliased.EntityLogicalName, (Guid)aliased.Value);
            if (typeof(T) == typeof(Guid) && aliased.Value is EntityReference)
                return (T)(object)((EntityReference)aliased.Value).Id;
            return (T)aliased.Value;
        }

        public Entity Entity { get; set; }
        protected Entity PreEntity { get; set; }
        public Guid Id { get { return Entity.Id; } }
        public string LogicalName { get { return Entity.LogicalName; } }
        protected object CloneAttribute(object value)
        {
            if (value == null)
            {
                return null;
            }
            var stringValue = value as string;
            if (stringValue != null)
            {
                return new string(stringValue.ToCharArray());
            }
            var optionSetValue = value as OptionSetValue;
            if (optionSetValue != null)
            {
                return new OptionSetValue(optionSetValue.Value);
            }
            var optionSetValueCollection = value as OptionSetValueCollection;
            if (optionSetValueCollection != null)
            {
                return new OptionSetValueCollection(optionSetValueCollection);
            }
            var entityReferenceValue = value as EntityReference;
            if (entityReferenceValue != null)
            {
                return new EntityReference
                {
                    LogicalName = CloneAttribute(entityReferenceValue.LogicalName) as string,
                    Id = entityReferenceValue.Id,
                    Name = CloneAttribute(entityReferenceValue.Name) as string
                };
            }
            var booleanManagedValue = value as BooleanManagedProperty;
            if (booleanManagedValue != null)
            {
                return new BooleanManagedProperty(booleanManagedValue.Value);
            }
            var moneyValue = value as Money;
            if (moneyValue != null)
            {
                return new Money(moneyValue.Value);
            }
            var aliasedValue = value as AliasedValue;
            if (aliasedValue != null)
            {
                return new AliasedValue(CloneAttribute(aliasedValue.EntityLogicalName) as string,
                    CloneAttribute(aliasedValue.AttributeLogicalName) as string,
                    CloneAttribute(aliasedValue.Value));
            }
            var entityCollectionValue = value as EntityCollection;
            if (entityCollectionValue != null)
            {
                return new EntityCollection(entityCollectionValue.Entities.Select(CloneThisEntity).ToList());
            }
            var valueTypes = new List<Type>
            {
                typeof(long), typeof(bool), typeof(DateTime),
                typeof(decimal), typeof(double), typeof(int),
                typeof(Guid), typeof(float), typeof(byte), typeof(Enum)
            };
            var type = value.GetType();
            if (valueTypes.Contains(type))
            {
                return value;
            }
            throw new InvalidDataException("Attribute of type '" + type.Name + "' is not supported yet. Please file an issue on GitHub: https://github.com/DigitalFlow/Xrm-Update-Context");
        }

        protected Entity CloneThisEntity(Entity entity)
        {
            var clone = new Entity
            {
                Id = entity.Id,
                LogicalName = entity.LogicalName
            };
            foreach (var attribute in entity.Attributes)
            {
                clone[attribute.Key] = CloneAttribute(attribute.Value);
            }
            return clone;
        }

        public Entity GetCreateEntity()
        {
            return this.Entity;
        }

        public Entity GetUpdateEntity()
        {
            string MethodUpdate()
            {
                var stackTrace = new System.Diagnostics.StackTrace();
                System.Reflection.MethodBase method = stackTrace.GetFrame(2).GetMethod();
                return $"{method?.ReflectedType?.Namespace}.{method?.ReflectedType?.Name}.{method?.Name}";
            }
            var update = new Entity(Entity.LogicalName);
            update.Id = Entity.Id;
            foreach (var property in Entity.Attributes)
            {
                var key = property.Key;
                var value = property.Value;
                if (!PreEntity.Attributes.ContainsKey(key))
                {
                    update[key] = value;
                }
                else if (!object.Equals(PreEntity[key], Entity[key]))
                {
                    update[key] = value;
                }
            }
            if (update.Attributes.Count == 0) throw new InvalidPluginExecutionException($"Update {Entity.LogicalName} without attributes on method: {MethodUpdate()}");
            if (Entity.Id == Guid.Empty) throw new InvalidPluginExecutionException($"Update {Entity.LogicalName} without Guid on method: {MethodUpdate()}");
            return update;
        }

        public EntityReference ToEntityReference()
        {
            if (Entity == null || Entity.Id == Guid.Empty) return null;
            return Entity.ToEntityReference();
        }

        public bool Contains(string field)
        {
            return this.Entity.Contains(field);
        }

        public void Remove(string field)
        {
            this.Entity.Attributes.Remove(field);
        }

        public bool Exist()
        {
            if (Entity == null || Entity.Id == Guid.Empty) return false;
            return true;
        }
    }
}
