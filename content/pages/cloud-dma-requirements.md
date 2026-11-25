---
title: "Cloud DMA Requirements for Windows 10/11"
description: "Check Windows, Hyper-V, CPU virtualization, RAM and network requirements before buying Cloud DMA. Review the separately required services."
slug: "/cloud-dma-requirements/"
---

# Cloud DMA Requirements for Windows 10/11

Before buying anything that relies on Hyper-V, it's worth checking whether your PC can actually run the required setup.

The Cloud DMA requirements aren't particularly mysterious, but there are several things to check. Windows edition, CPU virtualization, memory and security settings all matter here.

Here's the checklist based on the supplied product documentation. Keep it open while checking your system so you don't end up guessing at compatibility.

## Cloud DMA requirements: start with Windows and Hyper-V

The provider lists Windows 10 and Windows 11 in 64-bit versions.

The setup uses [Windows Hyper-V role documentation](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/hyper-v-overview) to provision a virtual environment on your existing computer. Windows Pro, Enterprise and Education editions are recommended because of their Hyper-V availability.

The provider also says to follow the installer notes for your particular edition.

The exact compatibility status for every Windows edition and build is [NEEDS INFO]. Check this before purchasing, especially if you're using a Home edition or a less common Windows installation.

## CPU virtualization and Hyper-V requirements

Your processor needs to support virtualization.

The two listed options are:

- Intel VT-x.
- AMD-V.

CPU virtualization must be enabled in your firmware for Hyper-V. Microsoft’s [enable Hyper-V on Windows](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v) guide covers the role and firmware checks.

Having a supported processor isn't the same as having virtualization enabled. The relevant setting may still need to be switched on in your motherboard's firmware.

The setup also needs the ability to enable the Hyper-V role during the guided installation.

Don't guess based on your processor name alone. Confirm that virtualization is available and enabled on your actual PC.

## Cloud DMA Windows 11 and memory requirements

The product lists Windows 10 and Windows 11 64-bit support.

For system memory, the published requirements are:

| Component | Requirement |
|---|---|
| System RAM | 8 GB minimum |
| Recommended RAM | 16 GB |
| Internet | Stable broadband connection |
| CPU virtualization | Intel VT-x or AMD-V |
| Virtualization platform | Hyper-V |

A stable broadband connection is required for activation and ongoing service connectivity.

The product uses an encrypted service link during activation, so internet connectivity isn't something to overlook after installation.

## Security settings to check

The provider specifies these settings as enabled:

- HVCI.
- Core Isolation.
- TPM.
- Secure Boot.

Check each one before purchasing.

Don't assume that a feature is enabled just because your PC supports it. The actual system configuration matters.

The exact steps for checking these settings can differ between computers, Windows editions and firmware interfaces. Follow the provider's current setup documentation rather than changing random security settings based on an unrelated tutorial.

## Additional purchases you need

This is a separate part of the checklist, and it matters just as much as the hardware requirements.

The Cloud DMA product lists three additional required purchases:

1. GREENWARD.
2. Static Server.
3. AWS.

They're all separate purchases. Static Server and AWS are different products, and both are required.

They aren't included in the Cloud DMA lifetime license.

Before ordering, check the [Cloud DMA $50 lifetime product details](/cloud-dma/) so you know what the license covers and what you'll need separately.

## Your pre-purchase checklist

Before proceeding, make sure you've checked the following:

- [ ] Windows 10 or Windows 11, 64-bit.
- [ ] Hyper-V availability for your Windows edition.
- [ ] Intel VT-x or AMD-V support.
- [ ] CPU virtualization enabled in firmware.
- [ ] At least 8 GB RAM.
- [ ] 16 GB RAM recommended.
- [ ] Stable broadband connection.
- [ ] HVCI enabled.
- [ ] Core Isolation enabled.
- [ ] TPM enabled.
- [ ] Secure Boot enabled.
- [ ] GREENWARD, Static Server and AWS accounted for separately.

One last thing: the product documentation doesn't provide a complete compatibility matrix for every Windows build and edition. Exact supported builds and any edition-specific exceptions are [NEEDS INFO]. Get those confirmed rather than assuming your setup will work.

For the FragPunk software itself, start with the [FragPunk soft aim and ESP overview](/). The [FragPunk monthly and lifetime price table](/fragpunk-cheats-price/) also explains how the license and separate infrastructure costs fit together.
