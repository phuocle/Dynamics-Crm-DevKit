#!/usr/bin/env python3
"""
Enhanced Typo Detection System for Dynamics CRM DevKit
More aggressive typo detection with better coverage.
"""

import os
import sys
import json
import re
import argparse
import logging
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Tuple, Set, Optional, Any
import glob
from collections import defaultdict

class EnhancedTypoDetector:
    """Enhanced typo detector with more aggressive detection patterns."""
    
    def __init__(self, config_path: str = "typo_config.json"):
        """Initialize the enhanced typo detector."""
        self.config = self._load_config(config_path)
        self.findings = []
        self.stats = {
            'files_scanned': 0,
            'typos_found': 0,
            'corrections_applied': 0,
            'files_modified': 0
        }
        self.logger = self._setup_logger()
        
        # Common typos database (much more comprehensive)
        self.common_typos = {
            'teh': 'the',
            'adn': 'and',
            'hte': 'the',
            'nad': 'and',
            'taht': 'that',
            'jsut': 'just',
            'liek': 'like',
            'mroe': 'more',
            'thna': 'than',
            'waht': 'what',
            'whne': 'when',
            'whih': 'which',
            'whcih': 'which',
            'becuase': 'because',
            'sicne': 'since',
            'recieve': 'receive',
            'seperate': 'separate',
            'webresouce': 'webresource',
            'dependant': 'dependent',
            'indipendent': 'independent',
            'occassion': 'occasion',
            'occassional': 'occasional',
            'occassionally': 'occasionally',
            'reccomend': 'recommend',
            'reccomendation': 'recommendation',
            'recomend': 'recommend',
            'recomendation': 'recommendation',
            'maintainence': 'maintenance',
            'maintainance': 'maintenance',
            'existance': 'existence',
            'existant': 'existent',
            'resistence': 'resistance',
            'persistance': 'persistence',
            'independance': 'independence',
            'concensus': 'consensus',
            'liason': 'liaison',
            'mispell': 'misspell',
            'mispelling': 'misspelling',
            'mispelled': 'misspelled',
            'fourty': 'forty',
            'ninty': 'ninety',
            'thier': 'their',
            'wether': 'whether',
            'completly': 'completely',
            'immediatly': 'immediately',
            'aproximately': 'approximately',
            'aproximate': 'approximate',
            'similiar': 'similar',
            'familar': 'familiar',
            'simular': 'similar',
            'simliar': 'similar',
            'simalar': 'similar',
            'stoped': 'stopped',
            'droped': 'dropped',
            'geting': 'getting',
            'runing': 'running',
            'begining': 'beginning',
            'planing': 'planning',
            'wining': 'winning',
            'shinning': 'shining',
            'stoping': 'stopping',
            'droping': 'dropping',
            'arguement': 'argument',
            'judgement': 'judgment',
            'acknowlegment': 'acknowledgment',
            'acknowlegement': 'acknowledgement',
            'priviledge': 'privilege',
            'privilage': 'privilege',
            'occured': 'occurred',
            'occuring': 'occurring',
            'occurence': 'occurrence',
            'occurance': 'occurrence',
            'definately': 'definitely',
            'definatly': 'definitely',
            'definitly': 'definitely',
            'neccessary': 'necessary',
            'succesful': 'successful',
            'sucessful': 'successful',
            'accomodate': 'accommodate',
            'calender': 'calendar',
            'calander': 'calendar',
            'recieved': 'received',
            'commited': 'committed',
            'comitted': 'committed',
            'refered': 'referred',
            'refering': 'referring',
            'transfered': 'transferred',
            'transfering': 'transferring',
            'developement': 'development',
            'enviroment': 'environment',
            'enviromental': 'environmental',
            'goverment': 'government',
            'govermental': 'governmental',
            'temperture': 'temperature',
            'temprature': 'temperature',
            'seperation': 'separation',
            'explaination': 'explanation',
            'apparant': 'apparent',
            'apparantly': 'apparently',
            'appearence': 'appearance',
            'prefered': 'preferred',
            'prefering': 'preferring',
            'diferent': 'different',
            'diference': 'difference',
            'definite': 'definite',
            'definate': 'definite',
            'libary': 'library',
            'libaray': 'library',
            'libery': 'library',
            'febuary': 'February',
            'feburary': 'February',
            'janury': 'January',
            'janaury': 'January',
            'wendsday': 'Wednesday',
            'wensday': 'Wednesday',
            'wednsday': 'Wednesday',
            'thirsday': 'Thursday',
            'thusday': 'Thursday',
            'teusday': 'Tuesday',
            'tusday': 'Tuesday',
            'satruday': 'Saturday',
            'saterday': 'Saturday',
            'suday': 'Sunday',
            'sunady': 'Sunday',
            'mondya': 'Monday',
            'mondy': 'Monday',
            'fridya': 'Friday',
            'firday': 'Friday',
            'tommorow': 'tomorrow',
            'tomarrow': 'tomorrow',
            'tommorrow': 'tomorrow',
            'tongiht': 'tonight',
            'tonihgt': 'tonight',
            'yesteday': 'yesterday',
            'yesturday': 'yesterday',
            'lenght': 'length',
            'hieght': 'height',
            'widht': 'width',
            'weigth': 'weight',
            'exmaple': 'example',
            'examlpe': 'example',
            'exampel': 'example',
            'excample': 'example',
            'eample': 'example',
            'exmple': 'example',
            'exapmle': 'example',
            'exampe': 'example',
            'develp': 'develop',
            'develope': 'develop',
            'developement': 'development',
            'programm': 'program',
            'programe': 'program',
            'programing': 'programming',
            'programer': 'programmer',
            'programers': 'programmers',
            'algoritm': 'algorithm',
            'algorythm': 'algorithm',
            'algorythms': 'algorithms',
            'algoritms': 'algorithms',
            'perfomance': 'performance',
            'performace': 'performance',
            'performence': 'performance',
            'implmentation': 'implementation',
            'implementaion': 'implementation',
            'implemenation': 'implementation',
            'configuraiton': 'configuration',
            'configuation': 'configuration',
            'configurtion': 'configuration',
            'initialisation': 'initialization',
            'initialise': 'initialize',
            'initialised': 'initialized',
            'initialising': 'initializing',
            'paramater': 'parameter',
            'paramaters': 'parameters',
            'paramter': 'parameter',
            'paramters': 'parameters',
            'charachter': 'character',
            'charachters': 'characters',
            'charcter': 'character',
            'charcters': 'characters',
            'funciton': 'function',
            'funcitons': 'functions',
            'fucntion': 'function',
            'fucntions': 'functions',
            'funtion': 'function',
            'funtions': 'functions',
            'variabl': 'variable',
            'varaible': 'variable',
            'varabile': 'variable',
            'variabel': 'variable',
            'vairable': 'variable',
            'intialization': 'initialization',
            'initalization': 'initialization',
            'initializaton': 'initialization',
            'initilization': 'initialization',
            'initilize': 'initialize',
            'initalize': 'initialize',
            'initializtion': 'initialization',
            'intialize': 'initialize',
            'intialise': 'initialize',
            'intialisation': 'initialization',
            'integreation': 'integration',
            'integeration': 'integration',
            'intergration': 'integration',
            'integation': 'integration',
            'procesing': 'processing',
            'processng': 'processing',
            'proccessing': 'processing',
            'processsing': 'processing',
            'loggin': 'logging',
            'loging': 'logging',
            'debuging': 'debugging',
            'debuging': 'debugging',
            'handeling': 'handling',
            'handlling': 'handling',
            'managment': 'management',
            'managmenet': 'management',
            'managerment': 'management',
            'confguration': 'configuration',
            'configuraton': 'configuration',
            'configuraiton': 'configuration',
            'configration': 'configuration',
            'authentification': 'authentication',
            'authencation': 'authentication',
            'authentiaction': 'authentication',
            'authenication': 'authentication',
            'authorisation': 'authorization',
            'authorizaiton': 'authorization',
            'authoriation': 'authorization',
            'authoriztion': 'authorization',
            'permision': 'permission',
            'permisions': 'permissions',
            'permissons': 'permissions',
            'permisisons': 'permissions',
            'privilige': 'privilege',
            'priviliges': 'privileges',
            'priviledges': 'privileges',
            'privilages': 'privileges',
            'secuirty': 'security',
            'securty': 'security',
            'securitys': 'security',
            'securiity': 'security',
            'conneciton': 'connection',
            'conection': 'connection',
            'connetion': 'connection',
            'connectoin': 'connection',
            'connecton': 'connection',
            'conncetion': 'connection',
            'reponse': 'response',
            'respone': 'response',
            'respons': 'response',
            'respose': 'response',
            'repsone': 'response',
            'requets': 'request',
            'requset': 'request',
            'reques': 'request',
            'requst': 'request',
            'requiest': 'request',
            'buisness': 'business',
            'busness': 'business',
            'busines': 'business',
            'bussiness': 'business',
            'busniess': 'business',
            'operaion': 'operation',
            'operaiton': 'operation',
            'opertion': 'operation',
            'opertaion': 'operation',
            'operaitons': 'operations',
            'opertions': 'operations',
            'exectuion': 'execution',
            'excution': 'execution',
            'executoin': 'execution',
            'executon': 'execution',
            'exection': 'execution',
            'excecution': 'execution',
            'applicaiton': 'application',
            'applicaton': 'application',
            'appliction': 'application',
            'applicaitons': 'applications',
            'applicatons': 'applications',
            'applictions': 'applications',
            'informaiton': 'information',
            'informaton': 'information',
            'infomation': 'information',
            'informatoin': 'information',
            'informtion': 'information',
            'infromation': 'information',
            'registraion': 'registration',
            'regisration': 'registration',
            'registraiton': 'registration',
            'registraton': 'registration',
            'registeration': 'registration',
            'regristration': 'registration',
            'serilization': 'serialization',
            'serialiation': 'serialization',
            'serilisation': 'serialization',
            'serialiation': 'serialization',
            'deserilization': 'deserialization',
            'deserialiation': 'deserialization',
            'deserilisation': 'deserialization',
            'deserialiation': 'deserialization',
            'communicaiton': 'communication',
            'comunicaiton': 'communication',
            'communicaton': 'communication',
            'comminication': 'communication',
            'comunication': 'communication',
            'communicaitons': 'communications',
            'comunicaitons': 'communications',
            'communicatons': 'communications',
            'commincations': 'communications',
            'comunications': 'communications',
            'trnsaction': 'transaction',
            'transacion': 'transaction',
            'transacton': 'transaction',
            'transacction': 'transaction',
            'transation': 'transaction',
            'transacctions': 'transactions',
            'transacions': 'transactions',
            'transactons': 'transactions',
            'transations': 'transactions',
            'transformaiton': 'transformation',
            'transformaton': 'transformation',
            'transfromation': 'transformation',
            'transformtion': 'transformation',
            'transofrmation': 'transformation',
            'transformaitons': 'transformations',
            'transformatons': 'transformations',
            'transfromations': 'transformations',
            'transformtions': 'transformations',
            'transofrmations': 'transformations',
            'validaiton': 'validation',
            'validaton': 'validation',
            'validaion': 'validation',
            'validtion': 'validation',
            'vaildation': 'validation',
            'validaitons': 'validations',
            'validatons': 'validations',
            'validaions': 'validations',
            'validtions': 'validations',
            'vaildations': 'validations',
            'notificaiton': 'notification',
            'notificaton': 'notification',
            'notifcation': 'notification',
            'notificaitons': 'notifications',
            'notificatons': 'notifications',
            'notifcations': 'notifications',
            'calculaiton': 'calculation',
            'calculaton': 'calculation',
            'calcualtion': 'calculation',
            'calcultion': 'calculation',
            'calcuation': 'calculation',
            'calculaitons': 'calculations',
            'calculatons': 'calculations',
            'calcualtions': 'calculations',
            'calcultions': 'calculations',
            'calcuations': 'calculations',
            'generaiton': 'generation',
            'generaton': 'generation',
            'geneartion': 'generation',
            'genertion': 'generation',
            'genration': 'generation',
            'generaitons': 'generations',
            'generatons': 'generations',
            'geneartions': 'generations',
            'genertions': 'generations',
            'genrations': 'generations',
            'customizaiton': 'customization',
            'customizaton': 'customization',
            'customisaton': 'customization',
            'customiztion': 'customization',
            'cusomization': 'customization',
            'customizaitons': 'customizations',
            'customizatons': 'customizations',
            'customisatons': 'customizations',
            'customiztions': 'customizations',
            'cusomizations': 'customizations',
            'personalizaiton': 'personalization',
            'personalizaton': 'personalization',
            'personalisaton': 'personalization',
            'personaliztion': 'personalization',
            'peronalization': 'personalization',
            'personalizaitons': 'personalizations',
            'personalizatons': 'personalizations',
            'personalisatons': 'personalizations',
            'personaliztions': 'personalizations',
            'peronalizations': 'personalizations',
            'localizaiton': 'localization',
            'localizaton': 'localization',
            'localisaton': 'localization',
            'localiztion': 'localization',
            'localizaitons': 'localizations',
            'localizatons': 'localizations',
            'localisatons': 'localizations',
            'localiztions': 'localizations',
            'globalizaiton': 'globalization',
            'globalizaton': 'globalization',
            'globalisaton': 'globalization',
            'globaliztion': 'globalization',
            'globalizaitons': 'globalizations',
            'globalizatons': 'globalizations',
            'globalisatons': 'globalizations',
            'globaliztions': 'globalizations',
            'internationalizaiton': 'internationalization',
            'internationalizaton': 'internationalization',
            'internationalisaton': 'internationalization',
            'internationaliation': 'internationalization',
            'internationaliation': 'internationalization',
            'organizaiton': 'organization',
            'organizaton': 'organization',
            'organisaton': 'organization',
            'organiztion': 'organization',
            'organziation': 'organization',
            'organizaitons': 'organizations',
            'organizatons': 'organizations',
            'organisatons': 'organizations',
            'organiztions': 'organizations',
            'organziations': 'organizations',
            'optimizaiton': 'optimization',
            'optimizaton': 'optimization',
            'optimisaton': 'optimization',
            'optimiztion': 'optimization',
            'optmization': 'optimization',
            'optimizaitons': 'optimizations',
            'optimizatons': 'optimizations',
            'optimisatons': 'optimizations',
            'optimiztions': 'optimizations',
            'optmizations': 'optimizations',
            'synchronizaiton': 'synchronization',
            'synchronizaton': 'synchronization',
            'synchronisaton': 'synchronization',
            'synchroniztion': 'synchronization',
            'syncronization': 'synchronization',
            'synchronizaitons': 'synchronizations',
            'synchronizatons': 'synchronizations',
            'synchronisatons': 'synchronizations',
            'synchroniztions': 'synchronizations',
            'syncronizations': 'synchronizations'
        }
        
        # Technical domain specific terms to exclude
        self.technical_exclusions = {
            'async', 'await', 'bool', 'int', 'var', 'const', 'let', 'typeof', 'instanceof',
            'namespace', 'using', 'public', 'private', 'protected', 'internal', 'static',
            'readonly', 'override', 'virtual', 'abstract', 'sealed', 'foreach', 'linq',
            'guid', 'datetime', 'timespan', 'nullable', 'params', 'ref', 'out', 'where',
            'select', 'from', 'join', 'orderby', 'groupby', 'having', 'func', 'action',
            'predicate', 'eventhandler', 'stringbuilder', 'httpclient', 'httpresponse',
            'xmldocument', 'xmlnode', 'xmlelement', 'regex', 'match', 'cultureinfo',
            'dictionary', 'list', 'arraylist', 'hashset', 'queue', 'stack', 'task',
            'thread', 'cancellationtoken', 'semaphoreslim', 'mutex', 'assembly', 'type',
            'methodinfo', 'propertyinfo', 'fieldinfo', 'constructorinfo', 'parameterinfo',
            'memberinfo', 'attribute', 'exception', 'argumentexception', 'argumentnullexception',
            'argumentoutofrangeexception', 'invalidoperationexception', 'notsupportedexception',
            'notimplementedexception', 'objectdisposedexception', 'nullreferenceexception',
            'indexoutofrangeexception', 'overflowexception', 'outofmemoryexception',
            'stackoverflowexception', 'typeloadexception', 'filenotfoundexception',
            'directorynotfoundexception', 'pathtoolongexception', 'unauthorizedaccessexception',
            'securityexception', 'serializationexception', 'formatexception', 'timeoutexception',
            'socketexception', 'webexception', 'httprequestexception', 'jsonexception',
            'xmlexception', 'sqlexception', 'entityexception', 'connectionexception',
            'commandexception', 'transactionexception', 'rollbackexception', 'deadlockexception',
            'locktimeoutexception', 'commandtimeoutexception', 'dynamicscrm', 'devkit',
            'webresource', 'webresources', 'webapi', 'proxytypes', 'customapi', 'customaction',
            'solutionpackager', 'csproj', 'vsix', 'nuget', 'nupkg', 'assemblyinfo',
            'xmlns', 'xsi', 'schemalocation', 'visualstudioversion', 'minimumvisualstudioversion',
            'codeanalysis', 'msbuild', 'oauth', 'crm', 'xrm', 'powerplatform', 'powerapps',
            'powerautomate', 'powerbi', 'dataverse', 'commondataservice', 'cds', 'odata',
            'soap', 'wsdl', 'wcf', 'wpf', 'winforms', 'winui', 'uwp', 'xaml', 'mvvm',
            'prism', 'unity', 'autofac', 'ninject', 'structuremap', 'simpleinjector',
            'lightinject', 'dryioc', 'moq', 'nsubstitute', 'rhino', 'mocks', 'fakeiteasy',
            'pose', 'shims', 'stubs', 'fakes', 'nunit', 'xunit', 'mstest', 'specflow',
            'shouldly', 'fluentassertions', 'bogus', 'autofixture', 'faker', 'builder',
            'factory', 'repository', 'unitofwork', 'service', 'manager', 'provider',
            'handler', 'processor', 'converter', 'mapper', 'adapter', 'facade', 'decorator',
            'proxy', 'interceptor', 'middleware', 'filter', 'validator', 'resolver',
            'locator', 'registry', 'container', 'singleton', 'transient', 'scoped',
            'xamarin', 'blazor', 'razor', 'mvc', 'signalr', 'entity', 'framework',
            'core', 'identity', 'authorization', 'authentication', 'jwt', 'openid',
            'saml', 'ldap', 'activedirectory', 'azure', 'aws', 'gcp', 'docker',
            'kubernetes', 'microservices', 'rest', 'graphql', 'grpc', 'protocol',
            'buffers', 'serialization', 'deserialization', 'marshalling', 'unmarshalling',
            'encoding', 'decoding', 'encryption', 'decryption', 'hashing', 'cryptography',
            'certificate', 'publickey', 'privatekey', 'rsa', 'dsa', 'ecdsa', 'aes',
            'des', 'tripledes', 'sha', 'md5', 'hmac', 'pbkdf2', 'bcrypt', 'scrypt',
            'argon2', 'http', 'https', 'ftp', 'ftps', 'sftp', 'ssh', 'ssl', 'tls',
            'tcp', 'udp', 'ip', 'dns', 'dhcp', 'nat', 'vpn', 'lan', 'wan', 'wlan',
            'wifi', 'bluetooth', 'nfc', 'rfid', 'gps', 'gis', 'ocr', 'ai', 'ml',
            'dl', 'nlp', 'nlu', 'nlg', 'asr', 'tts', 'stt', 'cv', 'ar', 'vr',
            'mr', 'xr', 'iot', 'iiot', 'm2m', 'p2p', 'b2b', 'b2c', 'c2c', 'g2b',
            'g2c', 'saas', 'paas', 'iaas', 'faas', 'baas', 'daas', 'caas', 'maas',
            'secaas', 'idaas', 'aaas', 'xaas', 'ci', 'cd', 'devops', 'mlops',
            'aiops', 'gitops', 'noops', 'sre', 'qa', 'qc', 'qe', 'ba', 'pm',
            'po', 'sm', 'tl', 'tm', 'em', 'dm', 'vp', 'cto', 'cio', 'ceo',
            'coo', 'cfo', 'cmo', 'ciso', 'cdo', 'cpo', 'cro', 'cao', 'cco',
            'clo', 'cbo', 'json', 'xml', 'yaml', 'html', 'css', 'js', 'ts',
            'sql', 'api', 'cli', 'gui', 'ui', 'ux', 'url', 'uri', 'sdk',
            'ide', 'vscode', 'visualstudio', 'intellij', 'eclipse', 'netbeans',
            'atom', 'sublime', 'vim', 'emacs', 'nano', 'notepad', 'git', 'svn',
            'mercurial', 'perforce', 'tfs', 'github', 'gitlab', 'bitbucket',
            'sourceforge', 'codeplex', 'apache', 'nginx', 'iis', 'tomcat',
            'jetty', 'glassfish', 'websphere', 'weblogic', 'jboss', 'wildfly',
            'spring', 'hibernate', 'struts', 'jsf', 'servlet', 'jsp', 'jstl',
            'ejb', 'jms', 'jpa', 'jdbc', 'jndi', 'jaxb', 'jaxws', 'jaxrs',
            'json', 'xml', 'yaml', 'csv', 'tsv', 'pdf', 'docx', 'xlsx',
            'pptx', 'txt', 'rtf', 'odt', 'ods', 'odp', 'png', 'jpg', 'jpeg',
            'gif', 'bmp', 'tiff', 'svg', 'ico', 'webp', 'mp3', 'wav', 'flac',
            'aac', 'ogg', 'wma', 'mp4', 'avi', 'mkv', 'wmv', 'flv', 'webm',
            'mov', 'zip', 'rar', '7z', 'tar', 'gz', 'bz2', 'xz', 'cab',
            'iso', 'dmg', 'exe', 'msi', 'deb', 'rpm', 'pkg', 'appx',
            'crmsvcutilextensions', 'crmsvcutil', 'crmserviceclient', 'organizationservice',
            'organizationserviceproxy', 'organizationservicecontext', 'entityreference',
            'entitycollection', 'entitymetadata', 'attributemetadata', 'relationshipmetadata',
            'optionmetadata', 'optionsetmetadata', 'entitystate', 'entitymetadatafilters',
            'plugintype', 'pluginassembly', 'pluginregistration', 'plugincontext',
            'pluginexecutioncontext', 'executioncontext', 'tracingservice', 'iorganizationservice',
            'iorganizationservicefactory', 'iserviceprovider', 'ipluginexecutioncontext',
            'itracingservice', 'inotificationservice', 'iserviceendpointnotificationservice',
            'workflowcontext', 'workflowactivity', 'codeactivity', 'codeactivitycontext',
            'customactivity', 'customactivitycontext', 'businessprocessflow', 'businessrule',
            'businessruleaction', 'businessrulecondition', 'businessprocessflowinstance',
            'businessprocessflowstage', 'businessprocessflowstep', 'businessprocessflowcategory',
            'businessprocessflowentity', 'businessprocessflowattribute', 'businessprocessflowformxml',
            'businessprocessflowvisualization', 'businessprocessflowcontrol', 'businessprocessflownavigation',
            'businessprocessflowheader', 'businessprocessflowfooter', 'businessprocessflowstatus',
            'businessprocessflowstage', 'businessprocessflowstep', 'businessprocessflowcategory',
            'businessprocessflowentity', 'businessprocessflowattribute', 'businessprocessflowformxml',
            'businessprocessflowvisualization', 'businessprocessflowcontrol', 'businessprocessflownavigation',
            'businessprocessflowheader', 'businessprocessflowfooter', 'businessprocessflowstatus'
        }
        
    def _load_config(self, config_path: str) -> Dict:
        """Load configuration from JSON file."""
        try:
            with open(config_path, 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            self.logger.warning(f"Config file {config_path} not found. Using default configuration.")
            return self._get_default_config()
        except json.JSONDecodeError as e:
            self.logger.error(f"Invalid JSON in config file: {e}")
            return self._get_default_config()
    
    def _get_default_config(self) -> Dict:
        """Get default configuration."""
        return {
            "file_patterns": {
                "include": ["*.cs", "*.js", "*.md", "*.txt", "*.json", "*.xml"],
                "exclude": ["*/bin/*", "*/obj/*", "*/node_modules/*", "*/.git/*"]
            },
            "correction_settings": {
                "auto_fix": False,
                "backup_files": True,
                "max_edit_distance": 2,
                "min_confidence": 0.7,
                "suggest_count": 3
            }
        }
    
    def _setup_logger(self) -> logging.Logger:
        """Setup logging configuration."""
        logger = logging.getLogger('enhanced_typo_detector')
        logger.setLevel(logging.INFO)
        
        handler = logging.StreamHandler(sys.stdout)
        formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
        handler.setFormatter(formatter)
        logger.addHandler(handler)
        
        return logger
    
    def scan_repository(self, root_path: str = ".") -> List[Dict]:
        """Scan the entire repository for typos."""
        self.logger.info(f"Starting enhanced typo scan of repository: {root_path}")
        
        files_to_scan = self._find_files_to_scan(root_path)
        self.logger.info(f"Found {len(files_to_scan)} files to scan")
        
        for file_path in files_to_scan:
            self._scan_file(file_path)
            self.stats['files_scanned'] += 1
        
        self.logger.info(f"Enhanced scan complete. Found {self.stats['typos_found']} typos in {self.stats['files_scanned']} files")
        return self.findings
    
    def _find_files_to_scan(self, root_path: str) -> List[str]:
        """Find all files matching the include patterns."""
        files_to_scan = []
        
        include_patterns = self.config['file_patterns']['include']
        exclude_patterns = self.config['file_patterns']['exclude']
        
        for pattern in include_patterns:
            pattern_path = os.path.join(root_path, "**", pattern)
            matched_files = glob.glob(pattern_path, recursive=True)
            files_to_scan.extend(matched_files)
        
        # Remove duplicates and filter out excluded files
        files_to_scan = list(set(files_to_scan))
        filtered_files = []
        
        for file_path in files_to_scan:
            should_exclude = False
            for exclude_pattern in exclude_patterns:
                if self._matches_pattern(file_path, exclude_pattern):
                    should_exclude = True
                    break
            
            if not should_exclude:
                filtered_files.append(file_path)
        
        return filtered_files
    
    def _matches_pattern(self, file_path: str, pattern: str) -> bool:
        """Check if file path matches the given pattern."""
        regex_pattern = pattern.replace("*", ".*").replace("?", ".")
        return bool(re.search(regex_pattern, file_path))
    
    def _scan_file(self, file_path: str) -> None:
        """Scan a single file for typos."""
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            
            lines = content.split('\n')
            
            for line_num, line in enumerate(lines, 1):
                self._scan_line(file_path, line_num, line)
                
        except Exception as e:
            self.logger.error(f"Error scanning file {file_path}: {e}")
    
    def _scan_line(self, file_path: str, line_num: int, line: str) -> None:
        """Scan a single line for typos."""
        # Extract words from the line
        words = re.findall(r'\b[a-zA-Z]+\b', line)
        
        for word in words:
            word_lower = word.lower()
            
            # Skip if word is too short
            if len(word_lower) < 3:
                continue
            
            # Skip if word is in technical exclusions
            if word_lower in self.technical_exclusions:
                continue
            
            # Skip camelCase, PascalCase, and other coding conventions
            if self._is_code_identifier(word):
                continue
            
            # Check if word is a known typo
            if word_lower in self.common_typos:
                suggestion = self.common_typos[word_lower]
                
                # Preserve original case
                if word.isupper():
                    suggestion = suggestion.upper()
                elif word.istitle():
                    suggestion = suggestion.title()
                
                finding = {
                    'file': file_path,
                    'line': line_num,
                    'column': line.find(word) + 1,
                    'word': word,
                    'suggestion': suggestion,
                    'context': self._get_context(line, word),
                    'severity': self._get_severity(file_path, line),
                    'confidence': 0.9,
                    'line_content': line.strip()
                }
                
                self.findings.append(finding)
                self.stats['typos_found'] += 1
    
    def _is_code_identifier(self, word: str) -> bool:
        """Check if word is likely a code identifier."""
        # Check for camelCase
        if re.match(r'^[a-z]+([A-Z][a-z]*)*$', word):
            return True
        
        # Check for PascalCase
        if re.match(r'^[A-Z][a-z]*([A-Z][a-z]*)*$', word):
            return True
        
        # Check for snake_case (though this regex won't catch underscores)
        if re.match(r'^[a-z]+(_[a-z]+)*$', word):
            return True
        
        # Check for SCREAMING_SNAKE_CASE
        if re.match(r'^[A-Z]+(_[A-Z]+)*$', word):
            return True
        
        # Check for all caps (likely constants or abbreviations)
        if word.isupper() and len(word) >= 2:
            return True
        
        return False
    
    def _get_context(self, line: str, word: str) -> str:
        """Get context information for the typo."""
        line_lower = line.lower()
        
        if '//' in line or '/*' in line or '*/' in line:
            return 'comment'
        elif '"' in line and word in line:
            return 'string'
        elif line.strip().startswith('#'):
            return 'markdown_header'
        elif line.strip().startswith('*') or line.strip().startswith('-'):
            return 'markdown_list'
        elif any(keyword in line_lower for keyword in ['class', 'function', 'method', 'var', 'const', 'let']):
            return 'code'
        else:
            return 'text'
    
    def _get_severity(self, file_path: str, line: str) -> str:
        """Get severity based on file type and context."""
        if file_path.endswith('.md'):
            return 'medium'
        elif file_path.endswith('.txt'):
            return 'low'
        elif '//' in line or '/*' in line:
            return 'medium'
        elif '"' in line:
            return 'high'
        else:
            return 'medium'
    
    def generate_report(self, output_path: str = "enhanced_typo_report.json") -> None:
        """Generate a detailed report of findings."""
        report = {
            'timestamp': datetime.now().isoformat(),
            'statistics': self.stats,
            'findings': self.findings,
            'summary': self._generate_summary()
        }
        
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(report, f, indent=2, ensure_ascii=False)
        
        self.logger.info(f"Enhanced report generated: {output_path}")
    
    def generate_markdown_report(self, output_path: str = "enhanced_typo_summary.md") -> None:
        """Generate a markdown summary report."""
        summary = self._generate_summary()
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write("# Enhanced Typo Detection Report\n\n")
            f.write(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
            
            f.write("## Summary\n\n")
            f.write(f"- **Files Scanned:** {self.stats['files_scanned']}\n")
            f.write(f"- **Typos Found:** {self.stats['typos_found']}\n")
            f.write(f"- **Corrections Applied:** {self.stats['corrections_applied']}\n")
            f.write(f"- **Files Modified:** {self.stats['files_modified']}\n\n")
            
            f.write("## Detailed Findings\n\n")
            
            for finding in self.findings:
                f.write(f"### {finding['file']} (Line {finding['line']})\n\n")
                f.write(f"**Typo:** `{finding['word']}` → **Suggestion:** `{finding['suggestion']}`\n\n")
                f.write(f"**Context:** {finding['context']}\n")
                f.write(f"**Severity:** {finding['severity']}\n")
                f.write(f"**Confidence:** {finding['confidence']:.1%}\n\n")
                f.write(f"**Line Content:**\n")
                f.write(f"```\n{finding['line_content']}\n```\n\n")
                f.write("---\n\n")
            
            f.write("## Statistics by Category\n\n")
            
            f.write("### By File Type\n\n")
            file_types = {}
            for finding in self.findings:
                ext = Path(finding['file']).suffix
                file_types[ext] = file_types.get(ext, 0) + 1
            
            for ext, count in sorted(file_types.items()):
                f.write(f"- **{ext}:** {count} typos\n")
            
            f.write("\n### By Context\n\n")
            for context, count in summary['contexts'].items():
                f.write(f"- **{context.title()}:** {count} typos\n")
            
            f.write("\n### By Severity\n\n")
            for severity, count in summary['severities'].items():
                f.write(f"- **{severity.title()}:** {count} typos\n")
        
        self.logger.info(f"Enhanced markdown report generated: {output_path}")
    
    def _generate_summary(self) -> Dict:
        """Generate summary statistics."""
        summary = {
            'files': defaultdict(list),
            'contexts': defaultdict(int),
            'severities': defaultdict(int)
        }
        
        for finding in self.findings:
            summary['files'][finding['file']].append(finding)
            summary['contexts'][finding['context']] += 1
            summary['severities'][finding['severity']] += 1
        
        return {
            'files': dict(summary['files']),
            'contexts': dict(summary['contexts']),
            'severities': dict(summary['severities'])
        }
    
    def apply_corrections(self, backup: bool = True) -> None:
        """Apply corrections to files."""
        if not self.config['correction_settings']['auto_fix']:
            self.logger.warning("Auto-fix is disabled in configuration")
            return
        
        files_to_modify = defaultdict(list)
        
        # Group findings by file
        for finding in self.findings:
            files_to_modify[finding['file']].append(finding)
        
        for file_path, file_findings in files_to_modify.items():
            if backup:
                self._backup_file(file_path)
            
            self._apply_file_corrections(file_path, file_findings)
            self.stats['files_modified'] += 1
    
    def _backup_file(self, file_path: str) -> None:
        """Create a backup of the file."""
        backup_path = f"{file_path}.backup"
        with open(file_path, 'r', encoding='utf-8') as src:
            with open(backup_path, 'w', encoding='utf-8') as dst:
                dst.write(src.read())
        
        self.logger.info(f"Backup created: {backup_path}")
    
    def _apply_file_corrections(self, file_path: str, findings: List[Dict]) -> None:
        """Apply corrections to a single file."""
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Sort findings by line number in reverse order to avoid offset issues
        findings.sort(key=lambda x: x['line'], reverse=True)
        
        lines = content.split('\n')
        
        for finding in findings:
            line_num = finding['line'] - 1  # Convert to 0-based index
            if 0 <= line_num < len(lines):
                lines[line_num] = lines[line_num].replace(finding['word'], finding['suggestion'])
                self.stats['corrections_applied'] += 1
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(lines))
        
        self.logger.info(f"Applied corrections to: {file_path}")


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='Enhanced Typo Detection System for Dynamics CRM DevKit')
    parser.add_argument('--config', '-c', default='typo_config.json', help='Configuration file path')
    parser.add_argument('--root-path', '-r', default='.', help='Root path to scan')
    parser.add_argument('--report-only', action='store_true', help='Generate report only, no corrections')
    parser.add_argument('--auto-fix', action='store_true', help='Apply corrections automatically')
    parser.add_argument('--output-json', '-j', default='enhanced_typo_report.json', help='JSON report output path')
    parser.add_argument('--output-md', '-m', default='enhanced_typo_summary.md', help='Markdown report output path')
    parser.add_argument('--verbose', '-v', action='store_true', help='Verbose logging')
    
    args = parser.parse_args()
    
    # Setup logging level
    if args.verbose:
        logging.getLogger('enhanced_typo_detector').setLevel(logging.DEBUG)
    
    # Initialize detector
    detector = EnhancedTypoDetector(args.config)
    
    # Scan repository
    detector.scan_repository(args.root_path)
    
    # Generate reports
    detector.generate_report(args.output_json)
    detector.generate_markdown_report(args.output_md)
    
    # Apply corrections if requested
    if args.auto_fix and not args.report_only:
        detector.apply_corrections()
    
    print(f"\nEnhanced scan complete!")
    print(f"Files scanned: {detector.stats['files_scanned']}")
    print(f"Typos found: {detector.stats['typos_found']}")
    print(f"Corrections applied: {detector.stats['corrections_applied']}")
    print(f"Files modified: {detector.stats['files_modified']}")


if __name__ == "__main__":
    main()