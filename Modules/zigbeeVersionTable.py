#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
# Implementation of Zigbee for Domoticz plugin.
#
# This file is part of Zigbee for Domoticz plugin. https://github.com/zigbeefordomoticz/Domoticz-Zigbee
# (C) 2015-2024
#
# Initial authors: zaraki673 & pipiche38
#
# SPDX-License-Identifier:    GPL-3.0 license

FIRMWARE_BRANCH = {
    "00": "Production",
    "01": "Beta",
    "11": "ZiGate (znp)",
    "20": "CC1352/CC2652, Z-Stack 3.30+ (znp)",
    "21": "CC2531, Z-Stack 3.0.x (znp)",
    "22": "CC2531, Z-Stack Home 1.2 (znp)",
    "40": "ConBee II",
    "41": "RaspBee II",
    "42": "RaspBee",
    "43": "Conbee III",
    "30": "Elelabs, ELR02x",
    "31": "Elelabs, ELU01x",
    
    "97": "Unknown deConz",
    "98": "Unknown Silicon Labs",
    "99": "Unknown ZNP"
}

ZNP_MODEL = {
    "CC1352/CC2652, Z-Stack 3.30+": "20",
    "CC2531, Z-Stack 3.0.x": "21",
    "CC2531, Z-Stack Home 1.2": "22",
    "CC2652": "20",
    "CC2531": "21",
    "CC2538": "23",
    "ConBee II": "40",
    "Conbee II": "40",
    "Raspbee II": "41",
    "RaspBee II": "41",
    "RaspBee": "42",
    "Raspbee": "42",
    "Conbee III": "43",
    "Elelabs, ELR02x": "30",
    "Elelabs, ELU01x": "31",
}

def set_display_firmware_version( self ):

    if 0 <= int(self.ControllerData["Branch Version"]) < 20:   
        self.pluginParameters["DisplayFirmwareVersion"] = "Zigate - %s" % self.ControllerData["Minor Version"] 

    elif 20 <= int(self.ControllerData["Branch Version"]) < 30:
        # ZNP
        self.pluginParameters["DisplayFirmwareVersion"] = "Znp - %s" % self.ControllerData["Minor Version"] 

    elif 30 <= int(self.ControllerData["Branch Version"]) < 40:   
        # Silicon Labs
        self.pluginParameters["DisplayFirmwareVersion"] = "Ezsp - %s" %self.ControllerData["Minor Version"]
        
    elif 40 <= int(self.ControllerData["Branch Version"]) < 50:
        # deCONZ
        self.pluginParameters["DisplayFirmwareVersion"] = "deCONZ - %s" %self.ControllerData["Minor Version"]

    else:
        self.pluginParameters["DisplayFirmwareVersion"] = "UNK - %s" % self.ControllerData["Minor Version"] 
