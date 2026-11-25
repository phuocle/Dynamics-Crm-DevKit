using Microsoft.Xrm.Sdk;
using System;
using System.Linq;
using Dev.AllInOne.Shared;

namespace Dev.AllInOne.DataverseTests.Framework
{
    public sealed class PluginRunBuilder<TPlugin> where TPlugin : IPlugin, new()
    {
        private readonly PluginTestBase _test;
        private readonly PluginRegistrationInfo _registration;
        public PluginExecutionDescriptor Context { get; }

        internal PluginRunBuilder(PluginTestBase test, int? registrationIndex)
        {
            _test = test;
            _registration = PluginRegistrationInfo.Resolve(typeof(TPlugin), registrationIndex);
            Context = new PluginExecutionDescriptor();
            if (_registration != null)
            {
                Context.MessageName = _registration.Message;
                Context.PrimaryEntityName = _registration.Entity;
                Context.Stage = _registration.Stage;
                Context.Mode = _registration.Mode;
                Context.IsolationMode = _registration.IsolationMode;
            }
        }

        public PluginRunBuilder<TPlugin> WithTarget(Entity target)
        {
            if (target == null) throw new ArgumentNullException(nameof(target));
            SetTargetIdentity(target.LogicalName, target.Id);
            return WithInputParameter("Target", target);
        }

        internal PluginRunBuilder<TPlugin> WithTarget(EntityBase target)
            => WithTarget(target?.Entity ?? throw new ArgumentNullException(nameof(target)));

        public PluginRunBuilder<TPlugin> WithTargetReference(EntityReference target)
        {
            if (target == null) throw new ArgumentNullException(nameof(target));
            SetTargetIdentity(target.LogicalName, target.Id);
            return WithInputParameter("Target", target);
        }

        private void SetTargetIdentity(string entity, Guid id)
        {
            if (string.IsNullOrEmpty(Context.PrimaryEntityName))
                Context.PrimaryEntityName = entity;
            Context.PrimaryEntityId = id;
        }

        public PluginRunBuilder<TPlugin> WithPreImage(Entity image, string alias = "PreImage")
            => WithImage(Context.PreEntityImages, image, alias, ImageTypeEnum.PreImage);

        public PluginRunBuilder<TPlugin> WithPostImage(Entity image, string alias = "PostImage")
            => WithImage(Context.PostEntityImages, image, alias, ImageTypeEnum.PostImage);

        internal PluginRunBuilder<TPlugin> WithPreImage(EntityBase image, string alias = "PreImage")
            => WithPreImage(image?.Entity ?? throw new ArgumentNullException(nameof(image)), alias);

        internal PluginRunBuilder<TPlugin> WithPostImage(EntityBase image, string alias = "PostImage")
            => WithPostImage(image?.Entity ?? throw new ArgumentNullException(nameof(image)), alias);

        private PluginRunBuilder<TPlugin> WithImage(EntityImageCollection images, Entity image, string alias, ImageTypeEnum type)
        {
            if (image == null) throw new ArgumentNullException(nameof(image));
            if (string.IsNullOrWhiteSpace(alias)) throw new ArgumentException("Supply an image alias.", nameof(alias));
            if (_registration != null && !_registration.Images.Any(value => value.Alias == alias &&
                (value.Type == (int)type || value.Type == (int)ImageTypeEnum.Both)))
                throw new ArgumentException($"'{typeof(TPlugin).FullName}' has no {type} registered with alias '{alias}'.", nameof(alias));

            images[alias] = PluginTestBase.Snapshot(image);
            return this;
        }

        public PluginRunBuilder<TPlugin> WithInputParameter(string name, object value)
        {
            Context.InputParameters[name] = value;
            return this;
        }

        public PluginRunBuilder<TPlugin> WithOutputParameter(string name, object value)
        {
            Context.OutputParameters[name] = value;
            return this;
        }

        public PluginRunBuilder<TPlugin> WithSharedVariable(string name, object value)
        {
            Context.SharedVariables[name] = value;
            return this;
        }

        public PluginRunBuilder<TPlugin> WithDepth(int depth)
        {
            Context.Depth = depth;
            return this;
        }

        public PluginExecutionDescriptor Execute() => _test.ExecutePlugin(new TPlugin(), Context);
    }
}
