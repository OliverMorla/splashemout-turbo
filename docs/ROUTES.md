# Splash 'Em Out Routes

This route plan is written for Splash 'Em Out as of July 6, 2026. It prioritizes local search intent, fast service conversion, pricing clarity, location discovery, commercial quote generation, and a phased path toward replacing the Curbside Laundries customer portal.

## Priority Key

- P0: Required for launch, core conversion, local SEO, or operational trust.
- P1: Strongly recommended soon after launch or for a credible full site.
- P2: Useful later, but not required for the first successful release.
- Avoid: Do not build until there is a validated reason.

## Strategic Route Principles

- Local intent comes first: finding a location, calling, getting directions, and scheduling pickup must be obvious.
- Service pages should clarify price, turnaround, minimums, and next step.
- Location pages are high-value SEO and conversion routes. Give each one real local content.
- Commercial laundry needs its own path because the buyer, proof points, and form are different.
- Pricing should be visible, not buried.
- The first-party client portal should replace Curbside Laundries only when it can own the full customer lifecycle: booking, account access, order status, addresses, payment, notifications, support, and cancellation/reschedule rules.
- Keep public marketing routes crawlable and portal routes authenticated. Do not mix account-only data into public SEO pages.
- Avoid thin duplicate city pages and service pages that repeat the same paragraph with only the city changed.

## Public Routes

| Route            | Priority | Why It Matters                                                                                                                                                                   |
| ---------------- | -------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`              |       P0 | Primary landing route. It should lead with "Laundry Day, Handled," include Schedule Pickup and Find a Location CTAs, preview pricing, show core services, and build local trust. |
| `/services`      |       P0 | Overview of all service lines with clear paths to pickup, wash-and-fold, self-service, commercial, and dry cleaning.                                                             |
| `/pricing`       |       P0 | High-intent conversion page. Show per-pound prices, minimums, turnaround, bulky-item pricing, promotions, and commercial quote direction.                                        |
| `/locations`     |       P0 | Map/list hub for all laundromats with hours, addresses, phone numbers, services, and directions.                                                                                 |
| `/service-areas` |       P1 | Hub for pickup/delivery and local SEO coverage. Link to city and campus pages that have unique local content.                                                                    |
| `/faq`           |       P1 | Answers common objections around pricing, turnaround, separation, bags, pickup instructions, payment, and hours.                                                                 |
| `/reviews`       |       P1 | Trust route for local proof. Useful near CTAs and for SEO if reviews are available.                                                                                              |
| `/contact`       |       P0 | General contact with main phone, email, location selector, and commercial quote routing.                                                                                         |

## Service Routes

| Route                                    | Priority | Why It Matters                                                                                                                                 |
| ---------------------------------------- | -------: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `/services/pickup-and-delivery`          |       P0 | Highest-convenience residential route. Must link directly to the Curbside Laundries scheduling portal and show recurring/as-needed pricing.    |
| `/services/wash-and-fold`                |       P0 | Core drop-off route. Explain next-day service, $1.69/lb pricing, $15 minimum, order separation, hangers, and laundry bags.                     |
| `/services/self-service-laundry`         |       P0 | Supports laundromat near me intent. Highlight attended locations, machine sizes, amenities, card/coin/credit payment, and Find a Location CTA. |
| `/services/commercial-laundry`           |       P0 | Generates quote requests. Explain pickup, volume, frequency, turnaround, industry examples, and custom pricing.                                |
| `/services/dry-cleaning-pickup-delivery` |       P1 | Expands pickup/delivery into garment care. Explain eligible items, 72-hour specialty timing, and scheduling.                                   |
| `/services/comforters-blankets`          |       P1 | Useful SEO and conversion page for bulky items, bedding, blankets, pillows, pet beds, rugs, and large machines.                                |
| `/services/horse-blankets`               |       P2 | Relevant Kentucky niche if search volume or client priority supports it. Include pricing and equine laundry proof.                             |

## Location Routes

Each physical laundromat should have a page with address, phone, hours, services, machine details, amenities, parking/access notes, nearby landmarks, map embed, reviews, and local schema.

| Route                                        | Priority | Location                                       |
| -------------------------------------------- | -------: | ---------------------------------------------- |
| `/locations/versailles-road-lexington-ky`    |       P0 | 1202 Versailles Rd, Lexington, KY 40508        |
| `/locations/e-new-circle-road-lexington-ky`  |       P0 | 160 E New Circle Rd, Lexington, KY 40505       |
| `/locations/pimlico-parkway-lexington-ky`    |       P0 | 3120 Pimlico Pkwy Ste 178, Lexington, KY 40517 |
| `/locations/bryan-station-road-lexington-ky` |       P0 | 1788 Bryan Station Rd, Lexington, KY 40505     |
| `/locations/waller-avenue-lexington-ky`      |       P0 | 393 Waller Ave #13, Lexington, KY 40504        |
| `/locations/e-reynolds-road-lexington-ky`    |       P0 | 125 E Reynolds Rd, Lexington, KY 40517         |
| `/locations/red-house-road-richmond-ky`      |       P0 | 908 Red House Rd, Richmond, KY 40475           |
| `/locations/eastern-bypass-richmond-ky`      |       P0 | 469 Eastern Bypass, Richmond, KY 40475         |
| `/locations/edgewood-drive-nicholasville-ky` |       P0 | 200 Edgewood Dr, Nicholasville, KY 40356       |

## Service Area Routes

Build these only with unique content: local service notes, relevant customer types, nearby locations, pickup/delivery availability, and specific CTAs.

| Route                                        | Priority | Why It Matters                                                 |
| -------------------------------------------- | -------: | -------------------------------------------------------------- |
| `/service-areas/lexington-ky`                |       P0 | Primary market and strongest local SEO target.                 |
| `/service-areas/richmond-ky`                 |       P0 | Physical locations and pickup/delivery relevance.              |
| `/service-areas/nicholasville-ky`            |       P0 | Physical location and nearby service intent.                   |
| `/service-areas/georgetown-ky`               |       P1 | Nearby pickup/delivery and residential/commercial opportunity. |
| `/service-areas/frankfort-ky`                |       P1 | Nearby market with pickup/delivery and commercial demand.      |
| `/service-areas/versailles-ky`               |       P1 | Nearby market with local route relevance.                      |
| `/service-areas/winchester-ky`               |       P1 | Nearby service-area search opportunity.                        |
| `/service-areas/wilmore-ky`                  |       P2 | Smaller nearby market. Build when content can be specific.     |
| `/service-areas/midway-ky`                   |       P2 | Smaller nearby market. Build when content can be specific.     |
| `/service-areas/university-of-kentucky`      |       P1 | Student laundry route with pickup/drop-off intent.             |
| `/service-areas/eastern-kentucky-university` |       P1 | Student laundry route tied to Richmond.                        |

## Commercial Routes

| Route                                        | Priority | Why It Matters                                                                                                       |
| -------------------------------------------- | -------: | -------------------------------------------------------------------------------------------------------------------- |
| `/commercial`                                |       P0 | Commercial hub with industries served, service model, custom quote CTA, and phone number.                            |
| `/commercial/request-a-bid`                  |       P0 | Dedicated quote form for business name, contact, address, industry, volume, frequency, turnaround, and laundry type. |
| `/commercial/airbnb-vrbo-laundry`            |       P1 | High-value recurring linen/towel service target.                                                                     |
| `/commercial/restaurant-towel-linen-service` |       P1 | Restaurants and bars need recurring towels, linens, and emergency coverage.                                          |
| `/commercial/spa-salon-laundry`              |       P1 | Strong towel and linen segment.                                                                                      |
| `/commercial/medical-veterinary-laundry`     |       P1 | Needs careful claims and clear boundaries. Avoid regulated medical laundry promises unless verified.                 |
| `/commercial/hotel-linen-service`            |       P1 | High-volume buyer with custom quote needs.                                                                           |
| `/commercial/uniform-laundry`                |       P2 | Useful later if commercial demand supports it.                                                                       |
| `/commercial/equine-laundry`                 |       P2 | Kentucky-specific differentiator if operations support it.                                                           |

## Booking, Account, And External Routes

| Route              | Priority | Why It Matters                                                                                                                                         |
| ------------------ | -------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/schedule`        |       P0 | Booking entry route. During the bridge phase, redirect or hand off to `https://splashemout.curbsidelaundries.com/` with tracking and fallback copy.    |
| `/login`           |       P0 | Account entry route. During the bridge phase, redirect to Curbside Laundries. Once replaced, this should lead to the first-party authenticated portal. |
| `/signup`          |       P1 | Useful when first-party booking is live. Keep optional if booking can create an account at checkout.                                                   |
| `/forgot-password` |       P1 | Required when first-party auth is live. Not needed while Curbside owns auth.                                                                           |
| `/privacy`         |       P0 | Required trust/legal page, especially for forms, analytics, scheduling links, accounts, payment data, and contact data.                                |
| `/terms`           |       P0 | Required legal page for website use, quotes, pricing accuracy, portal usage, payment authorization, cancellation rules, and service limitations.       |
| `/accessibility`   |       P1 | Strongly recommended for a public local-service site and important for booking/account flows.                                                          |

## First-Party Client Portal Routes

These routes are for replacing Curbside Laundries with a native Splash 'Em Out portal. Build them in phases. Do not expose these as public SEO routes.

| Route                            | Priority | Description                                                                                                                                       |
| -------------------------------- | -------: | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/account`                       |       P0 | Authenticated customer dashboard with next pickup, active order status, recent orders, primary address, payment status, and support CTA.          |
| `/account/orders`                |       P0 | Customer order history with status, totals, service type, pickup/drop-off dates, and receipts.                                                    |
| `/account/orders/[orderId]`      |       P0 | Single order detail route for status timeline, bag count, weight, items, notes, charges, pickup/delivery windows, and support actions.            |
| `/account/schedule`              |       P0 | Authenticated booking flow for one-time or recurring pickup/delivery. Prefer this over separate public checkout routes once users are signed in.  |
| `/account/schedule/confirmation` |       P0 | Booking confirmation with order summary, pickup instructions, address, payment method, notification preferences, and reschedule/cancel policy.    |
| `/account/addresses`             |       P0 | Manage pickup/delivery addresses, access notes, building instructions, and default address. Critical for delivery reliability.                    |
| `/account/payment-methods`       |       P0 | Manage saved payment methods if Splash 'Em Out charges through the portal. Keep PCI-sensitive handling delegated to the payment provider.         |
| `/account/profile`               |       P1 | Name, phone, email, password, and basic account settings. Required once first-party auth is live, but lower conversion value than booking/status. |
| `/account/preferences`           |       P1 | Laundry preferences such as detergent, softener, drying, folding, hang-dry notes, recurring instructions, and notification channels.              |
| `/account/subscriptions`         |       P1 | Recurring pickup plans or saved schedules. Build only after recurring demand and operations are ready.                                            |
| `/account/invoices`              |       P1 | Receipts and invoices for residential users. Make P0 for commercial portal users if invoicing is part of the business model.                      |
| `/account/support`               |       P1 | Authenticated support route tied to order context, missing items, delivery issues, billing questions, and contact history.                        |
| `/account/notifications`         |       P2 | Notification preferences and history. Useful later, but basic SMS/email preferences can live in `/account/preferences` first.                     |

## Native Booking Flow Routes

Use these if booking is allowed before account creation. If the product requires login first, keep the flow under `/account/schedule` and avoid duplicate booking logic.

| Route                      | Priority | Description                                                                                                                                  |
| -------------------------- | -------: | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `/schedule`                |       P0 | Public booking start: service type, service address or ZIP, availability, and sign-in/create-account prompt.                                 |
| `/schedule/details`        |       P0 | Pickup details, laundry preferences, notes, contact info, and requested window.                                                              |
| `/schedule/payment`        |       P0 | Payment authorization or card collection if payment is required before pickup. Skip if the business bills after weighing.                    |
| `/schedule/review`         |       P0 | Final review before submitting the order. Important for reducing support issues and accidental bookings.                                     |
| `/schedule/confirmation`   |       P0 | Confirmation page for anonymous or newly created customers. Should encourage account creation if the user is not already authenticated.      |
| `/schedule/status/[token]` |       P1 | Magic-link status page for customers who booked without an account. Useful bridge route, but avoid long-term duplication with account pages. |

## Commercial Portal Routes

Only build a commercial portal after commercial operations require self-service. Until then, `/commercial/request-a-bid` plus internal follow-up is enough.

| Route                         | Priority | Description                                                                                                                       |
| ----------------------------- | -------: | --------------------------------------------------------------------------------------------------------------------------------- |
| `/commercial/request-a-bid`   |       P0 | Lead capture for business laundry. Already part of MVP and should remain separate from residential booking.                       |
| `/business`                   |       P2 | Authenticated commercial account dashboard for recurring clients, invoices, service schedule, pickup notes, and account contacts. |
| `/business/orders`            |       P2 | Commercial order history and status. Build when business customers repeatedly ask for visibility.                                 |
| `/business/invoices`          |       P2 | Commercial invoice and payment route. Promote to P1 if invoicing becomes a major support burden.                                  |
| `/business/locations`         |       P2 | Manage multiple business pickup locations. Useful for property managers, hotels, restaurants, and multi-site clients.             |
| `/business/service-agreement` |       P2 | Service terms, agreed pricing, pickup frequency, and operational notes for contracted clients.                                    |

## Internal Operations Routes

These are not CMS routes. They are protected operational routes needed only if Splash 'Em Out owns booking, order management, pickup/delivery, and customer support in the first-party platform.

| Route                   | Priority | Description                                                                                                                               |
| ----------------------- | -------: | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `/ops`                  |       P1 | Internal operations dashboard for today's pickups, active orders, exceptions, and workload. Required before fully replacing Curbside ops. |
| `/ops/orders`           |       P1 | Staff order queue with filters by status, location, pickup route, delivery date, service type, and exception state.                       |
| `/ops/orders/[orderId]` |       P1 | Staff order detail route for status updates, notes, weights, charges, photos if used, customer messages, and issue resolution.            |
| `/ops/customers`        |       P1 | Staff customer lookup for support, order history, addresses, and contact information. Must be permission-protected and audited.           |
| `/ops/routes`           |       P1 | Pickup/delivery route planning and driver assignment. Build when native scheduling starts assigning real pickup windows.                  |
| `/ops/pricing`          |       P2 | Internal pricing rules and fees. Keep in code or admin config until pricing changes frequently enough to need a UI.                       |
| `/ops/reports`          |       P2 | Revenue, order volume, route performance, and service metrics. Useful after transaction volume justifies reporting.                       |

## Admin Routes

| Route              | Priority | Why It Matters                                                                             |
| ------------------ | -------: | ------------------------------------------------------------------------------------------ |
| `/admin`           |       P0 | Payload admin already exists for content and media management. Access must stay protected. |
| `/admin/locations` |       P1 | Useful content model if locations are CMS-managed.                                         |
| `/admin/services`  |       P1 | Useful content model if service/pricing pages are CMS-managed.                             |
| `/admin/reviews`   |       P2 | Optional if testimonials are managed in CMS.                                               |

## Routes To Avoid In MVP

| Route                | Priority | Why To Avoid                                                                                                         |
| -------------------- | -------: | -------------------------------------------------------------------------------------------------------------------- |
| `/blog`              |    Avoid | A blog is lower priority than service, location, pricing, and commercial pages. Add only with a real local SEO plan. |
| `/community`         |    Avoid | Not relevant to the core conversion job.                                                                             |
| `/app`               |    Avoid | Scheduling already exists through Curbside Laundries. Do not imply a custom app unless building one.                 |
| `/membership`        |    Avoid | No validated membership program in the source brief.                                                                 |
| `/coupons`           |    Avoid | Could attract low-quality traffic unless promotions are active and approved.                                         |
| `/locations/near-me` |    Avoid | Weak SEO page. Use the locations hub and location finder instead.                                                    |

## MVP Must-Have Route Set

Build these first:

- `/`
- `/services`
- `/services/pickup-and-delivery`
- `/services/wash-and-fold`
- `/services/self-service-laundry`
- `/services/commercial-laundry`
- `/pricing`
- `/locations`
- all nine `/locations/[slug]` pages
- `/service-areas/lexington-ky`
- `/service-areas/richmond-ky`
- `/service-areas/nicholasville-ky`
- `/commercial`
- `/commercial/request-a-bid`
- `/schedule`
- `/login`
- `/contact`
- `/privacy`
- `/terms`

## First-Party Portal MVP Route Set

Build these when replacing Curbside Laundries becomes the actual implementation goal:

- `/login`
- `/forgot-password`
- `/account`
- `/account/orders`
- `/account/orders/[orderId]`
- `/account/schedule`
- `/account/schedule/confirmation`
- `/account/addresses`
- `/account/payment-methods`
- `/schedule`
- `/schedule/details`
- `/schedule/review`
- `/schedule/confirmation`
- `/ops`
- `/ops/orders`
- `/ops/orders/[orderId]`
- `/ops/customers`
- `/ops/routes`

Keep these out of the first portal release unless demand is proven:

- `/account/subscriptions`
- `/account/notifications`
- `/business`
- `/business/orders`
- `/business/invoices`
- `/ops/pricing`
- `/ops/reports`

## Why These Routes Give Splash 'Em Out The Best Chance

This platform wins by matching urgent local intent with fast action:

- Home and service routes explain what Splash 'Em Out does.
- Pricing routes reduce friction for residential customers.
- Location routes capture laundromat near me and directions intent.
- Service-area routes support pickup/delivery search.
- Commercial routes separate quote buyers from residential flows.
- Schedule and login routes preserve the external portal as the conversion path until the first-party portal can safely own booking and order operations.
- Account and ops routes become important only when the business is ready to replace Curbside Laundries as the source of truth.

## External Links

- Schedule pickup and customer login: https://splashemout.curbsidelaundries.com/
- Main phone: 859-268-4330
- Email: splashemoutlaundry@gmail.com
