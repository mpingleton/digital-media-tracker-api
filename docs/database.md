# Digital Media Tracker Database

## Tables

### users

|Attr|Field Name|Data Type|Remarks|
|-|-|-|-|
|PK|id|Integer|
|U|username|String|
| |passphrase|String|
| |role|String|Possible values: USER, MCO, ADMIN.|
| |rank|String|
| |first_name|String|
| |last_name|String|
| |email|String|
| |phone|String|

### sessions

|Attr|Field Name|Data Type|Remarks|
|-|-|-|-|
|PK|id|Integer|
|FK|user_id|Integer|References: users/id.|
|U|access_token|String|
| |created|Timestamp|
| |invalidated|Boolean|

### media

|Attr|Field Name|Data Type|Remarks|
|-|-|-|-|
|PK|id|Integer|
|FK|container_id|Integer|References: containers/id.|
| |control_number|String|
| |title|String|
| |media_type|String|
| |classification|String|
| |status|String|Possible values: BLANK, ACTIVE, DISPOSED, RELEASED.|

### containers

|Attr|Field Name|Data Type|Remarks|
|-|-|-|-|
|PK|id|Integer|
|FK|facility_id|Integer|References: facilities/id.|
| |description|String|

### facilities

|Attr|Field Name|Data Type|Remarks|
|-|-|-|-|
|PK|id|Integer|
|FK|base_id|Integer|References: bases/id.|
| |description|String|
| |building_address|String|
| |building_number|String|
| |room_number|String|

### bases

|Attr|Field Name|Data Type|Remarks|
|-|-|-|-|
|PK|id|Integer|
| |name|String|

### user_to_facility_assignments

|Attr|Field Name|Data Type|Remarks|
|-|-|-|-|
|PK|id|Integer|
|FK|user_id|Integer|References: users/id.|
|FK|facility_id|Integer|References: facilities/id.|

### media_transfers

|Attr|Field Name|Data Type|Remarks|
|-|-|-|-|
|PK|id|Integer|
| |status|String|Possible values: IN_PROGRESS, COMPLETED, REJECTED.|
|FK|media_id|Integer|References: media/id.|
|FK|gaining_container_id|Integer|References: containers/id.|
|FK|losing_container_id|Integer|References: containers/id.|
|FK|gaining_user_id|Integer|References: users/id.|
|FK|losing_user_id|Integer|References: users/id.|
| |remarks|String|

### accountability_checks

|Attr|Field Name|Data Type|Remarks|
|-|-|-|-|
|PK|id|Integer|
| |status|String|Possible values: NOT_STARTED, IN_PROGRESS, COMPLETED.|
| |started|Timestamp|
| |completed|Timestamp|

### accountability_check_items

|Attr|Field Name|Data Type|Remarks|
|-|-|-|-|
|PK|id|Integer|
|FK|checklist_id|Integer|References: accountability_checks/id.|
|FK|media_id|Integer|References: media/id.|
| |accounted_for|Boolean|

### media_documents

|Attr|Field Name|Data Type|Remarks|
|-|-|-|-|
|PK|id|Integer|
|FK|media_id|Integer|References: media/id.|
| |checksum_md5|String|
|U|url|String|