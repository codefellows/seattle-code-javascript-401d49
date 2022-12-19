#  AWS Intro

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/yeEAGnH7W)

## Presentations:  Final Event Lab

## Where We've Been

1. RESTful HTTP web services with Express and Node
1. Database management:  RESTful CRUD capability
1. Authentication and Authorization with ACL
1. Event Driven programs with the Observer Pattern

## Cloud Computing

10 years ago...  this was totally a thing:  On-site servers that required a lot of diverse maintenance

### EC2 -> (ECC) -> Elastic Cloud Computing

- Elastic === SCALABLE

What is an EC3 instance?
- Zoe:  basically an environment you can run a virtual machine (in the cloud)

How does this scale?
- can add more instances
- up the instance memory, processing power, etc

Additional thoughts

Virtual Environment running on PHYSICAL Server Farm Hardware

- Create a virtual machine by provisioning resources from physical servers. Very fast and efficient, sit in between the Operating System and the underlying hardware. Allows seamless scalability between software and hardware.
- Environments can be accessible to other Amazon Services and the public.

### Elastic Beanstalk  (Application Platform)

Web Application platform on top of EC2 Virtual Environments

- create a platform specific runtime application that can execute our source code.
- configure an EC2 instance, pre-configured with the scale definitions and maintain tools for our application

