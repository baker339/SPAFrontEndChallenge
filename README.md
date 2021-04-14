# **Hello, Ally team!**

### **A little bit of background on what I am presenting here (Front End Edition).**
---

In this front end challenge, I focused entirely on creating
a responsive SPA form. The idea here was to create a form
that was both functional but also presented in a pleasing
and eas to understand manner. 

So, fields are chosen to best capture the correct data. Errors
thrown give meaningful feedback in order to correct them. And,
data pulls are quick to prevent long load times. 

---


### **Where do I see gaps and what do I think could be expanded in the future?**
---

There are two main areas that would be necessary if this were
a real form to be used. 

*The Database*

If this data were to be meaningfully used in any way, it would
need to be captured somehow. I would imagine that any database
structures required for this would be quite minimal. 

*The API*

The API to connect to the database would be important for
two reasons. First, the answers given by the user need to be 
sent to the database to create new records. But also, there
is functionality framed out here in order to perform udpates. 
Those updates would need to be identifiable in some way and 
be able to match database data on some key. This way the data
can be later changed rather than a new record on every submission. 

*Why does the phone number not **validate** country code?*

One of the bonus challenges was to validate the phone number
provided based on the country code of the country chosen. 
I wanted to explain why I did not do this. Both the country
and the phone number are mandatory fields. I have a background
in cognitive ergonmics that I learned in my undergrad education. 
There, we learned that you cannot engineer the humans, but you 
can engineer the systems to account for what humans do. So, 
how does that answer the question above? Well, if both fields
are mandatory, then we already know exactly what their country
code is. We do not need to validate the user's knowledge of
their country code. We can just provide the code automatically
for the user. That is why instead of validating the country
code, I chose to autopopulate it on the field itself. 

---


### **Remaining Questions?**
---

No remaining questions, but consumption of data remains a heavy
thought in my mind. I think this challenge was able to show a
capability to visually build a front SPA with user interactibility.
But, right now it is really just a front facing application. 

Luckily, with something like React, connecting to a data source
can be relatively simple, so there is nothing to worry about. 

# 😁 😌 😋

---
