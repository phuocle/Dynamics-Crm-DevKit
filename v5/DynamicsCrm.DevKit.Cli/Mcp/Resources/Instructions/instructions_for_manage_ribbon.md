
# manage_ribbon: classic RibbonDiffXml operations

Use `manage_ribbon` for classic ribbon customizations; `manage_command` manages modern appaction commands. First use `buttons` or `detail` for the entity to inspect existing controls and obtain IDs. Verify JS and image web resources with `manage_webresource`. Do not invent IDs, names, functions, or operation fields.

For mutations call `manage_ribbon(action='update', entity_name='...', operations=...)`. `operations` is a **string containing a non-empty JSON array**, not an array passed directly as the parameter. Serialize the array once when constructing the tool arguments. Each array element has its own `action`; do not confuse it with the tool-level `action`. JSON property names below are case-sensitive. Operations execute in array order.

## Operation contract

`surface` is `form`, `main_grid`, or `sub_grid`. JS `library` and `enable_library` are web resource names; `function` is the click handler and `enable_function` is the enable-rule handler. Resource names resolve by display name first, then logical/unique/schema name; ambiguous matches fail.

- `add_button`: required `surface`, `label`, `library`, `function`, `enable_library`, `enable_function`. Optional `modern_image` (image web resource), `tooltip_title`, `tooltip_description`, `sequence` (integer; default 85). On `main_grid` or `sub_grid` only, `selection_min` and `selection_max` are optional nonnegative integers for a selection count rule; minimum must not exceed maximum. These selection fields are supported on add, not update.
- `update_button`: identify a custom button using `button_id` or `label`. With `button_id`, `label` is the new label; when using `label` to identify it, use `new_label` to rename. Supply at least one of the new label, `library`, `function`, `enable_library`, `enable_function`, `modern_image`, `tooltip_title`, `tooltip_description`, or `sequence`. Updating OOB buttons is unsupported.
- `hide_button`, `show_button`: require `button_id` from `buttons`; work with OOB or custom buttons. For custom buttons hide uses an always-disabled enable rule; for OOB it adds a HideCustomAction.
- `add_split_button`: required `surface`, `label`, `library`, `function`, `enable_library`, `enable_function`, and non-empty `items` array. The handler fields describe the split button's main action. Each item requires `label`, `library`, `function`, `enable_library`, and `enable_function`; optional item fields are `modern_image`, `tooltip_title`, `sequence`. Parent optional fields: `modern_image`, `tooltip_title`, `tooltip_description`, `sequence` (default 85).
- `add_flyout_static`: required `surface`, `label`, and non-empty `items` array. Each item has the same required and optional fields as an `add_split_button` item. Parent optional fields: `modern_image`, `tooltip_title`, `tooltip_description`, `sequence` (default 85).
- `update_split_button`: identify by `split_button_id` or `label`; `update_flyout_static`: identify by `flyout_id` or `label`. With an ID, `label` is the new label; when identifying by label, use `new_label` to rename. Both accept `modern_image`, `tooltip_title`, `tooltip_description`, `sequence`, and `items` updates. The split button also accepts `library`, `function`, `enable_library`, `enable_function` for its main action. Each item update identifies an existing item by `item_label` and can set `label` (new label), `modern_image`, `tooltip_title`, `sequence`, `library`, `function`, `enable_library`, or `enable_function`. These item updates do not add new items.
- `hide_flyout_item`, `show_flyout_item`: require `item_label` and either `flyout_id` or `flyout_label` for an existing flyout anchor. These operations target the item's generated button and toggle its always-disabled rule.

Example array to serialize into `operations`:

```json
[
  {"action":"add_button","surface":"sub_grid","label":"Review","library":"example_/review.js","function":"Example.review","enable_library":"example_/review.js","enable_function":"Example.canReview","selection_min":1,"selection_max":1},
  {"action":"hide_button","button_id":"<existing button ID from buttons>"}
]
```

Example flyout array (serialize before passing as `operations`):

```json
[{"action":"add_flyout_static","surface":"form","label":"Actions","items":[{"label":"Review","library":"example_/review.js","function":"Example.review","enable_library":"example_/review.js","enable_function":"Example.canReview"}]}]
```

The tool validates, backs up, imports, then starts PublishAll asynchronously. Follow the returned wait/poll instructions using `get_system_jobs`; do not read back with `buttons` or `detail` while publish is pending. The result's `backupPath` can be passed as `ribbonxml` to `action='undo'`. The advanced `ribbonxml` update input accepts inline RibbonDiffXml or a file path and preserves existing elements absent from the supplied patch; `operations` takes precedence when both are supplied.
