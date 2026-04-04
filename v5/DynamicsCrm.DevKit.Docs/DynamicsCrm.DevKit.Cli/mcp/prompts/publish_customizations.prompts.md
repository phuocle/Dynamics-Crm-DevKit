# publish_customizations --- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.

1. "I just added a new attribute to the account entity. Can you publish the account entity customizations so the changes are visible to users?"
2. "Publish ALL customizations in this Dataverse environment. I've made changes across multiple entities and want everything published at once."
3. "I updated the contact and lead forms but the changes aren't showing up. Can you publish customizations for both entities? Use 'contact,lead' as the entity list."
4. "After updating a global option set, I need to publish it. Can you publish with include_global_optionset set to true for the account entity?"
5. "I modified the sitemap for my model-driven app. Publish the account entity with include_sitemap set to true."
6. "The user reports 'I made changes but they are not showing up.' Can you publish all customizations to make the metadata changes visible?"
7. "I just used upsert_form to update the opportunity form with auto_publish set to false. Now I need to publish the opportunity entity as the final step."
8. "I made metadata changes using execute_webapi to create a new relationship. This requires publishing. Publish the account entity."
9. "I've been batching multiple form and view changes on the incident entity with auto_publish=false. Now publish the incident entity to apply everything at once."
10. "Publishing already-published changes is harmless and idempotent. Go ahead and publish all customizations just to be safe after my deployment."

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.

1. "Publish the account entity -- I just added a new field."
2. "Publish all customizations."
3. "I updated forms on contact and lead. Publish both."
4. "My changes aren't showing up in the app. Publish everything."
5. "Publish opportunity -- I batched several form changes with auto_publish off."
6. "I added a global option set. Publish account with global option sets included."
7. "Publish the incident entity after my view update."
8. "I modified the sitemap. Publish with sitemap included."
9. "I used the Web API to create a new relationship on account. Publish it."
10. "Just to be safe after deploying the solution, publish all customizations."
