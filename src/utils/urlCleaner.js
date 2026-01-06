const CLICK_IDS = [
  'fbclid',
  '_fbc',
  '_fbp',
  'mibextid',
  '__tn__',
  'eav',
  'rdc',
  'hc_*',
  'gclid',
  'gclsrc',
  'dclid',
  'gbraid',
  'wbraid',
  'srsltid',
  'msclkid',
  'ttclid',
  'tt_medium',
  'tt_content',
  'u_code',
  'share_app_name',
  'share_iid',
  'timestamp',
  '_t',
  '_d',
  '_r',
  'preview_pb',
  'twclid',
  'li_fat_id',
  'li_shby_r',
  'lipi',
  'lici',
  'igshid',
  'igsh',
  'sclid',
  'scclid',
  'sc_ua',
  'epik',
  'pp',
  'mc_eid',
  'mc_cid',
  '_kx',
  'yclid',
  'ymclid',
  'ysclid',
  '_openstat',
  'rdt_cid',
  'share_id',
  'correlation_id',
  '$3p',
  '$original_url',
  'oly_enc_id',
  'oly_anon_id',
  'obOrigUrl',
  'vero_id',
  'vero_conv',
  'rb_clickid',
  'wickedid',
  'si',
]

const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'utm_source_platform',
  'utm_creative_format',
  'utm_marketing_tactic',
  'utm_cid',
  'utm_reader',
  'utm_name',
  'utm_pubreferrer',
  'utm_swu',
  'utm_viz_id',
  'utm_brand',
]

const ANALYTICS_PARAMS = [
  '_ga',
  '_gl',
  '_gac',
  'ved',
  'ei',
  'bi*',
  'gfe_*',
  'gs_*',
  'oq',
  'esrc',
  'uact',
  'cad',
  'rlz',
  'sxsrf',
  'fbs',
  '_hsenc',
  '_hsmi',
  'hsa_*',
  'hsCtaTracking',
  '__hstc',
  '__hsfp',
  '__hssc',
  'mkt_tok',
  '__s',
  's_kwcid',
  'ef_id',
  'sdid',
  'trk',
  'trkCampaign',
  'trkInfo',
  'trk_contact',
  'trk_msg',
  'trk_module',
  'trk_sid',
  'ajs_uid',
  'ajs_aid',
  'ajs_prop_*',
  '_hp2_id*',
  '_hp2_ses*',
  'mp_*',
]

const SOCIAL_PARAMS = [
  'share',
  'shared',
  'ref',
  'referer',
  'referrer',
  'source',
  'src',
  'via',
  'from',
  'origin',
  'original_referer',
  'share_token',
]

const AFFILIATE_PARAMS = [
  'affiliate',
  'affiliate_id',
  'aff',
  'aff_id',
  'affid',
  'partner',
  'partner_id',
  'partnerid',
  'campaign',
  'campaign_id',
  'campaignid',
  'promo',
  'promo_code',
  'promocode',
  'coupon',
  'discount',
  'clickid',
  'click_id',
  'irclickid',
  'irgwc',
  'ircstid',
  'cjevent',
  'cjdata',
  'awc',
  'zanpid',
  'ranMID',
  'ranEAID',
  'ranSiteID',
  'sscid',
  'pubref',
  'pt',
  'ct',
  'at',
  'af_*',
  'pid',
  'c',
  'adjust_*',
  '~channel',
  '~feature',
  '~campaign',
  '~stage',
  '~tags',
]

const AMAZON_PARAMS = [
  'tag',
  'linkCode',
  'linkId',
  'ascsubtag',
  'ref',
  'ref_',
  'qid',
  'sr',
  'keywords',
  'pd_rd_r',
  'pd_rd_w',
  'pd_rd_wg',
  'pf_rd_r',
  'pf_rd_p',
  'pf_rd_s',
  'pf_rd_t',
  'pf_rd_i',
  'pf_rd_m',
  'content-id',
  'psc',
  'smid',
  'dib',
  'dib_tag',
  'dchild',
  'camp',
  'spIA',
  'sp_csd',
  '__mk_*',
  'creativeASIN',
  'srs',
  'th',
]

const EMAIL_PARAMS = [
  'ml_subscriber',
  'ml_subscriber_hash',
  'ck_subscriber_id',
  'email',
  'e',
  'subscriber_id',
  'uid',
  'user_id',
  'contact_id',
  'recipient_id',
  'bsft_uid',
  'bsft_eid',
  'bsft_clkid',
  'bsft_aaid',
  'bsft_ek',
]

const MISC_PARAMS = [
  'wickedsource',
  'feature',
  'pp',
  'kw',
  'app',
  'spm',
  'algo_pvid',
  'algo_expid',
  'btsid',
  'scm',
  'scm-url',
  '_branch_match_id',
  '$deep_link',
  'WT.mc_id',
  'WT.tsrc',
  'nr_email_referer',
  'vgo_ee',
  'ito',
  'itok',
  'hash',
  'hmb_campaign',
  'hmb_medium',
  'hmb_source',
  'redirect_log',
  'redirect_mongo_id',
  'redirect_reason',
  'ncid',
  'cmpid',
  'custid',
  'customer_id',
  'externalId',
  'external_id',
  '_ke',
  '_trksid',
  '_trkparms',
  'click_sum',
  'otracker',
  'otracker2',
  'ssid',
  'internal_ref',
  'store_code',
  'lid',
  'xtor',
  'mbid',
  'intcid',
  'CMP',
  'abtest',
  'ab_channel',
  '_branch_*',
  'otm_*',
  'vn_*',
  'ga_*',
  'mc_*',
  'shpxid',
  'spm_id_from',
  'from_source',
  'vd_source',
  'share_source',
  'share_medium',
  'share_plat',
  'share_tag',
  'share_session_id',
  'buvid',
  'mid',
  'seid',
  'unique_k',
  'plat_id',
  'up_id',
  'msource',
  'refer_from',
  'is_story_h5',
  'bbid',
  'ts',
  'visit_id',
  'broadcast_type',
  'is_room_feed',
  'publish_id',
  'sp_atk',
  'xptdk',
  'ad_click_id',
  'DEAL_ID',
  'tracking_id',
]

const MATOMO_PARAMS = [
  'pk_campaign',
  'pk_kwd',
  'pk_keyword',
  'pk_source',
  'pk_medium',
  'pk_content',
  'pk_cid',
  'mtm_campaign',
  'mtm_keyword',
  'mtm_source',
  'mtm_medium',
  'mtm_content',
  'mtm_cid',
  'mtm_group',
  'mtm_placement',
]

const NETSUITE_PARAMS = [
  'ns_mchannel',
  'ns_source',
  'ns_campaign',
  'ns_fee',
  'ns_linkname',
]

const SALESFORCE_PARAMS = [
  'sc_campaign',
  'sc_channel',
  'sc_content',
  'sc_medium',
  'sc_outcome',
  'sc_geo',
  'sc_country',
  'pi_cmp',
  'piCId',
]

const RECRUITER_ATS_PARAMS = [
  'gh_src',
  'gh_cid',
  'gh_token',
  'lever-source',
  'lever-origin',
  'lever-share-id',
  'wd-source',
  'source_id',
  'ss',
  'refId',
  'trackingId',
  'eBP',
  'recommendedFlavor',
  'destRedirectURL',
  'tk',
  'alid',
  'advn',
  'fccid',
  'cmp',
  'sjdu',
  'acatk',
  'pub',
  'srs',
  'ao',
  'pos',
  'ziprecruiter_source',
  'zrp_source',
  'sr_source',
  'trid',
  'ashbyhq',
  'source',
  'ref_source',
  'rippling_src',
  'breezy_source',
  'recruitee_source',
  'careersite_source',
  'iis',
  'iisn',
  'src',
  'cws',
  'jobPipeline',
  'applicationId',
  'candidateId',
  'job_click_id',
  'apply_source',
  'job_source',
  'referral_code',
  'recruiter_id',
  'career_page_source',
]

export const CLEANING_MODES = {
  RECOMMENDED: 'recommended',
  MAX_PRIVACY: 'max'
}

const AFFILIATE_PARAMS_RECOMMENDED = [
  'clickid',
  'click_id',
  'irclickid',
  'irgwc',
  'ircstid',
  'cjevent',
  'cjdata',
  'awc',
  'zanpid',
  'ranMID',
  'ranEAID',
  'ranSiteID',
  'sscid',
  'pubref',
]

const AMAZON_PARAMS_RECOMMENDED = [
  'tag',
  'linkCode',
  'linkId',
  'ascsubtag',
  'ref_',
]

const RECOMMENDED_TRACKING_PARAMS = [
  ...CLICK_IDS,
  ...UTM_PARAMS,
  ...ANALYTICS_PARAMS,
  ...MATOMO_PARAMS,
  ...NETSUITE_PARAMS,
  ...SALESFORCE_PARAMS,
  ...RECRUITER_ATS_PARAMS,
  ...AFFILIATE_PARAMS_RECOMMENDED,
  ...AMAZON_PARAMS_RECOMMENDED,
]

const MAX_PRIVACY_TRACKING_PARAMS = [
  ...RECOMMENDED_TRACKING_PARAMS,
  ...SOCIAL_PARAMS,
  ...AFFILIATE_PARAMS,
  ...AMAZON_PARAMS,
  ...EMAIL_PARAMS,
  ...MISC_PARAMS,
]

function ensureHttpProtocol(urlString) {
  if (!urlString || typeof urlString !== 'string') return null
  const trimmed = urlString.trim()
  if (!trimmed) return null
  if (trimmed.match(/^https?:\/\//i)) return trimmed
  if (trimmed.startsWith('//')) return 'https:' + trimmed
  return 'https://' + trimmed
}

function normalizeExtractedUrl(candidate) {
  if (!candidate || typeof candidate !== 'string') return null
  let value = candidate.trim()
  if (!value) return null

  if (/%3A%2F%2F/i.test(value) || /^https?%3A/i.test(value)) {
    try {
      value = decodeURIComponent(value)
    } catch {
      // ignore decode errors
    }
  }

  return ensureHttpProtocol(value)
}

const REDIRECT_PATTERNS = [
  {
    pattern: /^https?:\/\/(l|lm|m)\.facebook\.com\/l\.php/i,
    extract: (url) => new URL(url).searchParams.get('u'),
    type: 'Facebook'
  },
  {
    pattern: /^https?:\/\/(l|www)\.instagram\.com\/\?u=/i,
    extract: (url) => new URL(url).searchParams.get('u'),
    type: 'Instagram'
  },
  {
    pattern: /^https?:\/\/(www\.)?google\.[a-z.]+\/amp\/s\//i,
    extract: (url) => {
      const match = url.match(/\/amp\/s\/(.+)/)
      if (match) {
        const extracted = match[1]
        return extracted.startsWith('http') ? extracted : `https://${extracted}`
      }
      return null
    },
    type: 'Google AMP'
  },
  {
    pattern: /^https?:\/\/t\.co\//i,
    extract: null,
    type: 'Twitter'
  },
  {
    pattern: /^https?:\/\/(www\.)?youtube\.com\/redirect/i,
    extract: (url) => {
      const params = new URL(url).searchParams
      return params.get('q') || params.get('url')
    },
    type: 'YouTube'
  },
  {
    pattern: /^https?:\/\/(www\.)?google\.[a-z.]+\/url/i,
    extract: (url) => {
      const params = new URL(url).searchParams
      return params.get('url') || params.get('q')
    },
    type: 'Google'
  },
  {
    pattern: /^https?:\/\/(www\.)?linkedin\.com\/(redir\/redirect|slink)/i,
    extract: (url) => new URL(url).searchParams.get('url'),
    type: 'LinkedIn'
  },
  {
    pattern: /^https?:\/\/(www\.)?bing\.com\/ck\/a/i,
    extract: (url) => {
      const u = new URL(url).searchParams.get('u')
      if (u) {
        try {
          return decodeURIComponent(atob(u.replace(/^a1/, '')))
        } catch {
          return null
        }
      }
      return null
    },
    type: 'Bing'
  },
  {
    pattern: /^https?:\/\/steamcommunity\.com\/linkfilter\/\?url=/i,
    extract: (url) => new URL(url).searchParams.get('url'),
    type: 'Steam'
  },
  {
    pattern: /^https?:\/\/out\.reddit\.com\/\?url=/i,
    extract: (url) => new URL(url).searchParams.get('url'),
    type: 'Reddit'
  },
  {
    pattern: /^https?:\/\/click\.redditmail\.com\//i,
    extract: (url) => new URL(url).searchParams.get('url'),
    type: 'Reddit Email'
  },
  {
    pattern: /^https?:\/\/[a-z0-9]+\.safelinks\.protection\.outlook\.com/i,
    extract: (url) => new URL(url).searchParams.get('url'),
    type: 'Microsoft Safe Links'
  },
  {
    pattern: /^https?:\/\/slack-redir\.net\/link/i,
    extract: (url) => new URL(url).searchParams.get('url'),
    type: 'Slack'
  },
]

function unwrapRedirect(urlString) {
  for (const { pattern, extract, type } of REDIRECT_PATTERNS) {
    if (pattern.test(urlString)) {
      if (extract) {
        const unwrapped = extract(urlString)
        const normalized = normalizeExtractedUrl(unwrapped)
        if (normalized) {
          return { url: normalized, type }
        }
      }
      return { url: urlString, type: null }
    }
  }
  return { url: urlString, type: null }
}

function removeTrackingParams(urlString, { mode = CLEANING_MODES.RECOMMENDED } = {}) {
  try {
    const url = new URL(urlString)
    const hostnameLower = (url.hostname || '').toLowerCase()
    const isIndeed = /(^|\.)indeed\./.test(hostnameLower)
    const removedParams = []

    const trackingParams =
      mode === CLEANING_MODES.MAX_PRIVACY ? MAX_PRIVACY_TRACKING_PARAMS : RECOMMENDED_TRACKING_PARAMS

    const paramsToRemove = []
    url.searchParams.forEach((value, key) => {
      const keyLower = key.toLowerCase()
      let shouldRemove = trackingParams.some(p => {
        const pLower = p.toLowerCase()
        if (pLower.endsWith('*')) {
          return keyLower.startsWith(pLower.slice(0, -1))
        }
        if (pLower.endsWith('.*')) {
          return keyLower.startsWith(pLower.slice(0, -2))
        }
        return keyLower === pLower
      })

      if (!shouldRemove && keyLower === 'from') {
        const valueLower = String(value || '').toLowerCase()
        shouldRemove = isIndeed || valueLower.includes('share') || valueLower.includes('copy')
      }

      if (shouldRemove) {
        paramsToRemove.push(key)
        removedParams.push(key)
      }
    })

    paramsToRemove.forEach(key => url.searchParams.delete(key))

    return {
      url: url.toString(),
      removedParams
    }
  } catch {
    return { url: urlString, removedParams: [] }
  }
}

export function cleanURL(urlString, { mode = CLEANING_MODES.RECOMMENDED } = {}) {
  if (!urlString || typeof urlString !== 'string') {
    throw new Error('Invalid URL')
  }

  let normalizedURL = urlString.trim()
  if (!normalizedURL.match(/^https?:\/\//i)) {
    normalizedURL = 'https://' + normalizedURL
  }

  const { url: unwrappedURL } = unwrapRedirect(normalizedURL)
  const { url: cleanedURL } = removeTrackingParams(unwrappedURL, { mode })

  return cleanedURL
}

export function getCleaningReport(urlString, { mode = CLEANING_MODES.RECOMMENDED } = {}) {
  if (!urlString || typeof urlString !== 'string') {
    throw new Error('Invalid URL')
  }

  let normalizedURL = urlString.trim()
  if (!normalizedURL.match(/^https?:\/\//i)) {
    normalizedURL = 'https://' + normalizedURL
  }

  try {
    new URL(normalizedURL)
  } catch {
    throw new Error('Invalid URL format')
  }

  const { url: unwrappedURL, type: unwrapType } = unwrapRedirect(normalizedURL)
  const { url: cleanedURL, removedParams } = removeTrackingParams(unwrappedURL, { mode })

  let domain = ''
  try {
    domain = new URL(cleanedURL).hostname
  } catch {
    domain = 'unknown'
  }

  return {
    originalURL: urlString,
    cleanedURL,
    domain,
    unwrapped: !!unwrapType,
    unwrapType,
    removedParams,
    mode,
    paramCount: removedParams.length,
    totalRemoved: removedParams.length + (unwrapType ? 1 : 0)
  }
}

export function getSupportedParams() {
  const uniqueRecommended = new Set(RECOMMENDED_TRACKING_PARAMS.map(p => p.toLowerCase()))
  const uniqueMaxPrivacy = new Set(MAX_PRIVACY_TRACKING_PARAMS.map(p => p.toLowerCase()))

  return {
    clickIds: CLICK_IDS,
    utm: UTM_PARAMS,
    analytics: ANALYTICS_PARAMS,
    social: SOCIAL_PARAMS,
    affiliate: AFFILIATE_PARAMS,
    amazon: AMAZON_PARAMS,
    email: EMAIL_PARAMS,
    misc: MISC_PARAMS,
    matomo: MATOMO_PARAMS,
    netsuite: NETSUITE_PARAMS,
    salesforce: SALESFORCE_PARAMS,
    recruiterAts: RECRUITER_ATS_PARAMS,
    recommendedTotal: uniqueRecommended.size,
    maxPrivacyTotal: uniqueMaxPrivacy.size,
  }
}

export default cleanURL
