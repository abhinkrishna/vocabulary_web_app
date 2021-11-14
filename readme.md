# Vocabulary Web App

## Backend Server

Backend running on port ```4000```

open : [localhost:4000](http://localhost:4000)

## Backend API's

Backend API docs

### Dictionary API

#### Create

> Endpoint: ```api/dictionary```
>
> Method: ```POST```
>
> Body: { "word": ```"hello"``` }

#### Update

> Endpoint: ```api/dictionary```
>
> Method: ```PATCH```
>
> Body: { "word": ```"hello"``` }

#### Read Many

> Endpoint: ```api/dictionary```
>
> Method: ```GET```
>
> Params:  
>> ```order_by``` : ```id``` | ```word```
>>
>> ```order``` : ```ASC``` | ```DESC```
>>
>> ```page``` : ```(page_number)``` [ Default : ```1``` ]
>>
>> ```size``` : ```(no_of_records_in_a_page)``` [ Default : ```20```]
>>
>> ```query``` : ```(search_query_for_a_word)```

#### Read One

> Endpoint: ```api/dictionary/:id```
>
> Method: ```GET```

#### Delete

> Endpoint: ```api/dictionary/:id```
>
> Method: ```DELETE```
