# Research: Merge 5 Developer Tools into 1

**Date:** 2026-04-06
**Status:** Research / Analysis
**Scope:** `get_classic_workflows`, `get_cloud_flows`, `get_custom_apis`, `get_plugins`, `get_sdk_messages`

---

## 1. Current State Summary

| Tool | Dataverse Entity | Modes | Parameters | Lines (est.) |
|------|-----------------|-------|------------|-------------|
| `get_classic_workflows` | `workflow` (category=0) | 2 (list, detail) | 7 | ~300 |
| `get_cloud_flows` | `workflow` (category=5) + `flowsession` | 3 (list, detail, runs) | 8 | ~350 |
| `get_custom_apis` | `customapi` + `customapirequestparameter` + `customapiresponseproperty` | 2 (list, detail) | 5 | ~300 |
| `get_plugins` | `pluginassembly` + `plugintype` + `sdkmessageprocessingstep` + images | 3 (assemblies, detail, entity steps) | 10 | ~500 |
| `get_sdk_messages` | `sdkmessage` + `sdkmessagefilter` + `workflow` (category=3) | 2 (list, detail) | 3 | ~400 |
| **Total** | | **12 modes** | **33 params** | **~1850** |

---

## 2. Relationship Analysis

### What do these tools have in common?

All 5 tools are **read-only developer tools** that help understand **server-side logic** registered in Dataverse:

```
                        ┌─────────────────────┐
                        │  Dataverse Event     │
                        │  Pipeline            │
                        └──────────┬──────────┘
                                   │
           ┌───────────┬───────────┼───────────┬───────────┐
           │           │           │           │           │
      ┌────▼────┐ ┌────▼────┐ ┌────▼────┐ ┌────▼────┐ ┌────▼────┐
      │ Plugins │ │ Classic │ │ Cloud   │ │ Custom  │ │ SDK     │
      │         │ │Workflows│ │ Flows   │ │  APIs   │ │Messages │
      └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘
         C#          Low-code    Power       Modern       Discovery
        code         process    Automate     endpoints    layer
```

### How are they different?

| Aspect | Plugins | Classic Workflows | Cloud Flows | Custom APIs | SDK Messages |
|--------|---------|-------------------|-------------|-------------|-------------|
| **Domain** | C# code | Low-code process | Power Automate | REST endpoints | Message registry |
| **Primary Entity** | pluginassembly | workflow (cat=0) | workflow (cat=5) | customapi | sdkmessage |
| **User persona** | C# developer | Process admin | Citizen dev / admin | API developer | Plugin developer |
| **Query complexity** | High (5 entities, images) | Medium (1 entity) | Medium (2 entities) | Medium (3 entities) | High (4+ entities + XAML parsing) |
| **Has run history** | No (use get_plugin_trace_logs) | No (use get_jobs) | **Yes** (flowsession) | No | No |
| **Parameter count** | 10 | 7 | 8 | 5 | 3 |

---

## 3. Merge Feasibility Assessment

### Option A: Merge All 5 into `get_developer_tools` (or `get_automations`)

**Proposed action parameter:**
```
action = "plugins" | "classic_workflows" | "cloud_flows" | "custom_apis" | "sdk_messages"
```

**Pros:**
- Reduces tool count from 5 to 1
- Single entry point for all developer-facing queries
- Consistent with `manage_record` merge pattern

**Cons:**
- **Massive parameter surface**: ~33 unique parameters across all tools, but only 3-10 relevant per action. AI must understand which params apply to which action.
- **Description bloat**: Tool description would be enormous (~2000 chars). LLM tools with overly long descriptions are harder for AI to use correctly.
- **No shared logic**: Unlike `manage_record` (all CRUD on same entity), these 5 tools query **completely different** entities with **completely different** schemas. The "merge" is purely a routing wrapper.
- **Debugging harder**: Errors in one tool area affect the entire merged tool.
- **Token cost**: Every call sends the full description of all 5 tools to the LLM, even when it only needs one.

### Option B: Merge 2-3 Related Tools

#### B1: Merge `get_classic_workflows` + `get_cloud_flows` into `get_flows`

Both query the `workflow` entity (different categories). Natural merge.

```
action = "classic" | "cloud" | "runs"
```

| Shared Params | Classic-only | Cloud-only |
|---|---|---|
| entity_name, name_filter, status, max_records | trigger_field, mode, active_only | owner_filter, status_filter, minutes_ago |

**Assessment:** **Good candidate.** Same base entity, similar list/detail patterns, 15 combined params but well-partitioned by action.

#### B2: Merge `get_custom_apis` + `get_sdk_messages` into `get_messages` (or `get_apis`)

Both deal with the SDK message/API layer. `get_sdk_messages` already discovers Custom Actions (legacy), and `get_custom_apis` handles modern Custom APIs.

```
action = "sdk_messages" | "custom_apis" | "custom_actions"
```

| Shared Params | SDK Messages-only | Custom APIs-only |
|---|---|---|
| entity_name | include_custom_actions, message_name | api_name, include_microsoft, status, max_records |

**Assessment:** **Moderate candidate.** Related domain but different underlying entities. The combined description would be complex but manageable (~8 params).

#### B3: Keep `get_plugins` separate

`get_plugins` is the most complex tool (10 params, 3 modes, 5 entities). Its parameter surface is unique (assembly_name, type_name, stage, include_images, include_config). Merging it would add complexity without benefit.

**Assessment:** **Keep separate.** No overlap with other tools.

### Option C: Keep All 5 Separate (Status Quo)

**Pros:**
- Each tool has a focused, clear description
- AI selects the right tool based on user intent
- Parameters are relevant and minimal per tool

**Cons:**
- 5 tools occupy tool-list space (but they're read-only, so low risk)

---

## 4. Recommendation

### Recommended: Option B (Partial Merge)

| Merged Tool | Source Tools | Action Values |
|---|---|---|
| `get_automations` | `get_classic_workflows` + `get_cloud_flows` | `classic_list`, `classic_detail`, `cloud_list`, `cloud_detail`, `cloud_runs` |
| `get_apis` | `get_custom_apis` + `get_sdk_messages` | `custom_apis`, `sdk_messages`, `detail` |
| `get_plugins` | _(keep as-is)_ | _(no change)_ |

**Result:** 5 tools -> 3 tools. Net reduction of 2 tools.

### Alternative: Full Merge (Option A)

If the goal is maximum consolidation, merge all 5 into one tool:

| Merged Tool | Action Values | Combined Params |
|---|---|---|
| `get_developer_registrations` | `plugins`, `classic_workflows`, `cloud_flows`, `custom_apis`, `sdk_messages` | ~20 unique params (after dedup) |

**Risk:** Tool description becomes ~3000+ chars. AI accuracy may degrade when choosing correct params per action.

---

## 5. Parameter Mapping (Full Merge Reference)

If merging all 5, here's the combined parameter surface:

### Shared Parameters (reusable across actions)

| Parameter | Used by | Description |
|---|---|---|
| `action` | ALL | Required. Which tool to invoke. |
| `entity_name` | plugins, classic_workflows, custom_apis, sdk_messages | Filter by entity |
| `max_records` | ALL except sdk_messages | Max results |
| `status` | cloud_flows, custom_apis | active/inactive/all |
| `name_filter` | classic_workflows, cloud_flows | Filter by name (contains) |

### Action-specific Parameters

| Parameter | Only for | Description |
|---|---|---|
| `workflow_id` | classic_workflows | Detail mode GUID |
| `flow_id` | cloud_flows | Detail/runs mode GUID |
| `api_name` | custom_apis | Detail mode unique name |
| `message_name` | sdk_messages | Detail mode message name |
| `assembly_name` | plugins | Assembly filter / detail |
| `type_name` | plugins | Plugin type filter |
| `trigger_field` | classic_workflows | Update trigger field filter |
| `mode` | classic_workflows, plugins | background/realtime or sync/async |
| `stage` | plugins | prevalidation/preoperation/postoperation |
| `active_only` | classic_workflows, plugins | Only activated items |
| `include_images` | plugins | Include pre/post images |
| `include_config` | plugins | Include config values |
| `include_microsoft` | custom_apis | Include Microsoft APIs |
| `include_custom_actions` | sdk_messages | Include Custom Actions in list |
| `owner_filter` | cloud_flows | Filter by owner |
| `status_filter` | cloud_flows (runs) | Filter run status |
| `minutes_ago` | cloud_flows (runs) | Time window for runs |
| `sub_action` | cloud_flows | "list" or "runs" |

**Total: 1 shared `action` + 4 shared + 14 action-specific = 19 parameters**

---

## 6. Description Size Comparison

| Approach | Est. Description Size | Tool Count |
|---|---|---|
| Current (5 separate) | ~400 chars each x 5 = 2000 total | 5 |
| Partial merge (3 tools) | ~800 + ~600 + ~500 = 1900 total | 3 |
| Full merge (1 tool) | ~3000+ chars | 1 |

> **Note:** LLM tool selection accuracy typically degrades when individual tool descriptions exceed ~1500 chars. The `manage_record` description is ~800 chars and works well because all 4 actions share the same entity/parameter domain.

---

## 7. Conclusion

| Criteria | Full Merge (1 tool) | Partial Merge (3 tools) | Keep Separate (5 tools) |
|---|---|---|---|
| Tool count reduction | 5 -> 1 | 5 -> 3 | 5 -> 5 |
| Description clarity | Low (overloaded) | Medium (focused) | High (single-purpose) |
| AI selection accuracy | Risk of wrong params | Good | Best |
| Code complexity | High (giant router) | Medium | Low (current) |
| Maintenance | Harder (coupled) | Moderate | Easiest |
| Parameter relevance | Many unused per call | Some unused | All relevant |

**Bottom line:** Partial merge (Option B) is the best trade-off. Full merge is possible but the description bloat and parameter confusion risk outweigh the benefit of reducing from 3 tools to 1.
