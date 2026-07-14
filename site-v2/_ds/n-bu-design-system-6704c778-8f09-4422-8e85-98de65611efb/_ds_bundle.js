/* @ds-bundle: {"format":3,"namespace":"NBuDesignSystem_6704c7","components":[{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"ScentTile","sourcePath":"components/commerce/ScentTile.jsx"},{"name":"StarRating","sourcePath":"components/commerce/StarRating.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NewsletterForm","sourcePath":"components/forms/NewsletterForm.jsx"}],"sourceHashes":{"components/commerce/ProductCard.jsx":"278429610aa6","components/commerce/ScentTile.jsx":"4302ca4f6acd","components/commerce/StarRating.jsx":"3bf3b67c4a08","components/core/Badge.jsx":"02fe1eda9126","components/core/Button.jsx":"98e00ebed024","components/core/Eyebrow.jsx":"44997061e8bf","components/core/SectionHeading.jsx":"c046cf0a7ad2","components/forms/Input.jsx":"9e58369b95e7","components/forms/NewsletterForm.jsx":"dcebd7c0b3c9","redesigns/account/account.js":"509bfaa2a8b3","redesigns/account/data.js":"fc9e7ec9dd87","redesigns/fragrances/data.js":"29a2e76e4468","redesigns/homepage/data.js":"29a2e76e4468","redesigns/homepage/homepage2.js":"bb937c6158e3","ui_kits/storefront/App.jsx":"d40c67031a18","ui_kits/storefront/Footer.jsx":"9ab63ff8d5c9","ui_kits/storefront/Header.jsx":"29d35a837979","ui_kits/storefront/Hero.jsx":"805f9f155bee","ui_kits/storefront/Sections.jsx":"b246c3eb9789","ui_kits/storefront/data.js":"46f0d2a5a593"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NBuDesignSystem_6704c7 = window.NBuDesignSystem_6704c7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/ScentTile.jsx
try { (() => {
/**
 * Nēbu ScentTile — icon + label tile used in the "Shop by scent family"
 * navigation. Icons are the brand's icons8 set (hotel, champagne, bow-tie,
 * flower, grass, pomegranate, stones, wind).
 */
function ScentTile({
  icon,
  label,
  count,
  href = '#',
  active = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lift = hover || active;
  return React.createElement('a', {
    href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      textAlign: 'center',
      textDecoration: 'none',
      padding: '26px 18px',
      background: lift ? 'var(--surface-blush)' : 'var(--surface-card)',
      border: '1px solid ' + (lift ? 'rgba(120,0,11,0.20)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      transition: 'background var(--dur-base) var(--ease-brand), border-color var(--dur-base) var(--ease-brand), transform var(--dur-base) var(--ease-brand)',
      transform: lift ? 'translateY(-3px)' : 'none',
      ...style
    },
    ...rest
  }, React.createElement('span', {
    style: {
      width: '64px',
      height: '64px',
      borderRadius: 'var(--radius-pill)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: lift ? 'var(--surface-card)' : 'var(--surface-cream)',
      boxShadow: lift ? 'inset 0 0 0 1px rgba(183,129,59,0.5)' : 'none',
      transition: 'background var(--dur-base) var(--ease-brand)'
    }
  }, React.createElement('img', {
    src: icon,
    alt: '',
    width: 30,
    height: 30,
    style: {
      display: 'block'
    }
  })), React.createElement('span', {
    style: {
      fontSize: '12px',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, label), count != null ? React.createElement('span', {
    style: {
      fontSize: '11px',
      color: 'var(--text-muted)',
      letterSpacing: '0.04em'
    }
  }, count + ' scents') : null);
}
Object.assign(__ds_scope, { ScentTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ScentTile.jsx", error: String((e && e.message) || e) }); }

// components/commerce/StarRating.jsx
try { (() => {
/**
 * Nēbu StarRating — gold review stars with optional count.
 */
function StarRating({
  value = 5,
  max = 5,
  count,
  size = 15,
  showValue = false,
  style = {},
  ...rest
}) {
  const star = (fill, key) => React.createElement('svg', {
    key,
    width: size,
    height: size,
    viewBox: '0 0 20 20',
    'aria-hidden': true,
    style: {
      display: 'block'
    }
  }, React.createElement('defs', null, React.createElement('linearGradient', {
    id: 'nbstar' + key
  }, React.createElement('stop', {
    offset: fill * 100 + '%',
    stopColor: 'var(--accent)'
  }), React.createElement('stop', {
    offset: fill * 100 + '%',
    stopColor: 'var(--border-strong)'
  }))), React.createElement('path', {
    d: 'M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8z',
    fill: fill >= 1 ? 'var(--accent)' : fill <= 0 ? 'var(--border-strong)' : 'url(#nbstar' + key + ')'
  }));
  const stars = [];
  for (let i = 0; i < max; i++) stars.push(star(Math.max(0, Math.min(1, value - i)), i));
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-sans)',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      display: 'inline-flex',
      gap: '2px'
    }
  }, stars), showValue ? React.createElement('span', {
    style: {
      fontSize: '12px',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-heading)'
    }
  }, value.toFixed(1)) : null, count != null ? React.createElement('span', {
    style: {
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, '(' + count + ')') : null);
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Nēbu Badge — small status / sale / scent-family marker.
 */
function Badge({
  children,
  variant = 'wine',
  style = {},
  ...rest
}) {
  const variants = {
    wine: {
      background: 'var(--brand)',
      color: '#fff'
    },
    gold: {
      background: 'var(--accent)',
      color: '#fff'
    },
    sale: {
      background: 'var(--nb-ink)',
      color: '#fff'
    },
    soft: {
      background: 'var(--surface-blush)',
      color: 'var(--brand)',
      boxShadow: 'inset 0 0 0 1px rgba(120,0,11,0.18)'
    },
    cream: {
      background: 'var(--surface-cream)',
      color: 'var(--nb-rust)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      boxShadow: 'inset 0 0 0 1px var(--border-default)'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      fontSize: '10px',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: '5px 9px',
      borderRadius: 'var(--radius-sm)',
      ...variants[variant],
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
/**
 * Nēbu ProductCard — storefront product tile. Image with hover-reveal
 * "Add to cart", optional sale badge, title, scent-family meta, and the
 * wine price / struck compare-at / black discount chip pattern.
 */
function ProductCard({
  image,
  title,
  family,
  price,
  compareAt,
  badge,
  href = '#',
  onAdd,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  let discount = null;
  if (compareAt && price) {
    const c = parseFloat(String(compareAt).replace(/[^0-9.]/g, ''));
    const p = parseFloat(String(price).replace(/[^0-9.]/g, ''));
    if (c > p) discount = Math.round((c - p) / c * 100);
  }
  return React.createElement('div', {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-sans)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      transition: 'box-shadow var(--dur-base) var(--ease-brand), transform var(--dur-base) var(--ease-brand)',
      boxShadow: hover ? 'var(--shadow-card)' : 'none',
      transform: hover ? 'translateY(-3px)' : 'none',
      ...style
    },
    ...rest
  },
  // image
  React.createElement('a', {
    href,
    style: {
      display: 'block',
      position: 'relative',
      aspectRatio: '1 / 1',
      background: 'var(--surface-blush)',
      overflow: 'hidden'
    }
  }, badge ? React.createElement('div', {
    style: {
      position: 'absolute',
      top: '12px',
      left: '12px',
      zIndex: 2
    }
  }, React.createElement(__ds_scope.Badge, {
    variant: badge.variant || 'sale'
  }, badge.label)) : null, React.createElement('img', {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform 0.9s var(--ease-out)'
    }
  }), React.createElement('button', {
    onClick: e => {
      e.preventDefault();
      onAdd && onAdd();
    },
    style: {
      position: 'absolute',
      left: '12px',
      right: '12px',
      bottom: '12px',
      padding: '12px',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--brand)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-button)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-sm)',
      opacity: hover ? 1 : 0,
      transform: hover ? 'translateY(0)' : 'translateY(8px)',
      transition: 'opacity var(--dur-base) var(--ease-brand), transform var(--dur-base) var(--ease-brand), background var(--dur-fast) var(--ease-brand)'
    }
  }, 'Add to cart')),
  // body
  React.createElement('div', {
    style: {
      padding: '16px 16px 18px'
    }
  }, family ? React.createElement('div', {
    style: {
      fontSize: '10px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: '7px',
      fontWeight: 'var(--fw-medium)'
    }
  }, family) : null, React.createElement('a', {
    href,
    style: {
      display: 'block',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-heading)',
      textDecoration: 'none',
      lineHeight: 'var(--lh-snug)',
      marginBottom: '10px'
    }
  }, title), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      flexWrap: 'wrap'
    }
  }, React.createElement('span', {
    style: {
      fontSize: '15px',
      color: 'var(--text-heading)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, price), compareAt ? React.createElement('span', {
    style: {
      fontSize: '13px',
      color: 'var(--text-secondary)',
      textDecoration: 'line-through'
    }
  }, compareAt) : null, discount ? React.createElement('span', {
    style: {
      fontSize: '10px',
      color: '#fff',
      background: 'var(--nb-ink)',
      borderRadius: 'var(--radius-sm)',
      padding: '3px 7px',
      fontWeight: 'var(--fw-bold)'
    }
  }, discount + '% OFF') : null)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * Nēbu Button — the brand's primary action.
 * Wine fill by default; gold, ghost (for dark imagery) and outline variants.
 * Uppercase, wide-tracked label with an optional sliding arrow.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  fullWidth = false,
  disabled = false,
  href,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '10px 22px',
      fontSize: '10.5px'
    },
    md: {
      padding: '15px 34px',
      fontSize: '11.5px'
    },
    lg: {
      padding: '18px 44px',
      fontSize: '12.5px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--brand-contrast)',
      border: '2px solid var(--brand)'
    },
    gold: {
      background: 'var(--accent)',
      color: '#fff',
      border: '2px solid var(--accent)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--brand)',
      border: '2px solid var(--brand)'
    },
    ghost: {
      background: 'transparent',
      color: '#fff',
      border: '1.5px solid var(--border-on-dark)'
    },
    quiet: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '2px solid transparent',
      letterSpacing: 'var(--ls-nav)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-bold)',
    letterSpacing: 'var(--ls-button)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'background var(--dur-base) var(--ease-brand), color var(--dur-base) var(--ease-brand), border-color var(--dur-base) var(--ease-brand), transform var(--dur-fast) var(--ease-brand)',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const arrowSvg = arrow ? React.createElement('svg', {
    width: 14,
    height: 10,
    viewBox: '0 0 14 10',
    fill: 'none',
    'aria-hidden': true,
    className: 'nb-btn-arrow',
    style: {
      transition: 'transform var(--dur-fast) var(--ease-brand)'
    }
  }, React.createElement('path', {
    d: 'M1 5h12m0 0L9 1m4 4L9 9',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  })) : null;
  const hoverIn = e => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(-2px)';
    if (variant === 'primary' || variant === 'gold') {
      e.currentTarget.style.background = 'var(--brand-hover)';
      e.currentTarget.style.borderColor = 'var(--brand-hover)';
    } else if (variant === 'outline') {
      e.currentTarget.style.background = 'var(--brand)';
      e.currentTarget.style.color = '#fff';
    } else if (variant === 'ghost') {
      e.currentTarget.style.background = 'rgba(255,255,255,0.10)';
      e.currentTarget.style.borderColor = '#fff';
    }
    const a = e.currentTarget.querySelector('.nb-btn-arrow');
    if (a) a.style.transform = 'translateX(4px)';
  };
  const hoverOut = e => {
    e.currentTarget.style.transform = 'translateY(0)';
    Object.assign(e.currentTarget.style, {
      background: variants[variant].background,
      color: variants[variant].color,
      borderColor: variants[variant].border.split(' ').pop()
    });
    const a = e.currentTarget.querySelector('.nb-btn-arrow');
    if (a) a.style.transform = 'translateX(0)';
  };
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return React.createElement(Tag, {
    ...tagProps,
    onClick,
    style: base,
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut,
    ...rest
  }, children, arrowSvg);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
/**
 * Nēbu Eyebrow — the signature wide-tracked label flanked by gold rule
 * lines. Sits above headlines in heroes and section headers.
 */
function Eyebrow({
  children,
  tone = 'gold',
  rules = true,
  align = 'center',
  style = {},
  ...rest
}) {
  const tones = {
    gold: {
      color: 'var(--accent)',
      line: 'var(--rule-gold)'
    },
    light: {
      color: 'var(--accent-soft)',
      line: 'var(--rule-gold)'
    },
    wine: {
      color: 'var(--brand)',
      line: 'rgba(120,0,11,0.35)'
    },
    muted: {
      color: 'var(--text-muted)',
      line: 'var(--border-default)'
    }
  };
  const t = tones[tone] || tones.gold;
  const line = React.createElement('span', {
    'aria-hidden': true,
    style: {
      display: 'block',
      width: '40px',
      height: '1px',
      background: t.line,
      flexShrink: 0
    }
  });
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: t.color,
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      ...style
    },
    ...rest
  }, rules ? line : null, React.createElement('span', null, children), rules ? line : null);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/**
 * Nēbu SectionHeading — eyebrow + light display headline + optional intro.
 * The standard way Nēbu opens a section.
 */
function SectionHeading({
  eyebrow,
  title,
  emphasis,
  subtitle,
  align = 'center',
  onDark = false,
  style = {},
  ...rest
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? '720px' : 'none',
      margin: align === 'center' ? '0 auto' : '0',
      ...style
    },
    ...rest
  }, eyebrow ? React.createElement(__ds_scope.Eyebrow, {
    tone: onDark ? 'light' : 'gold',
    align
  }, eyebrow) : null, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-h2)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-heading)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)',
      margin: 0
    }
  }, title, emphasis ? React.createElement('em', {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)',
      fontWeight: 'var(--fw-light)'
    }
  }, ' ', emphasis) : null), subtitle ? React.createElement('p', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-relaxed)',
      color: onDark ? 'var(--text-on-dark-soft)' : 'var(--text-secondary)',
      margin: 0,
      maxWidth: '560px'
    }
  }, subtitle) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/**
 * Nēbu Input — refined text field with uppercase tracked label and a
 * gold focus ring.
 */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  hint,
  error,
  onDark = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || 'nb-' + Math.random().toString(36).slice(2, 8);
  const borderColor = error ? 'var(--nb-error)' : focus ? 'var(--accent)' : onDark ? 'var(--border-on-dark)' : 'var(--border-strong)';
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      ...style
    }
  }, label ? React.createElement('label', {
    htmlFor: inputId,
    style: {
      fontSize: '10.5px',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-soft)' : 'var(--text-secondary)'
    }
  }, label) : null, React.createElement('input', {
    id: inputId,
    type,
    placeholder,
    value,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: onDark ? '#fff' : 'var(--text-body)',
      background: onDark ? 'rgba(255,255,255,0.06)' : 'var(--surface-card)',
      padding: '13px 15px',
      border: '1px solid ' + borderColor,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-brand), box-shadow var(--dur-fast) var(--ease-brand)'
    },
    ...rest
  }), error ? React.createElement('span', {
    style: {
      fontSize: '12px',
      color: 'var(--nb-error)'
    }
  }, error) : hint ? React.createElement('span', {
    style: {
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/NewsletterForm.jsx
try { (() => {
/**
 * Nēbu NewsletterForm — the wine signup block. Eyebrow + light headline +
 * inline email field with a wine/gold submit. Used in the footer and as a
 * standalone band.
 */
function NewsletterForm({
  eyebrow = 'Join the List',
  title = 'Get 20% off your first order',
  blurb = "Sign up for the latest deals and new arrivals. We promise we won't write often — only for the fun stuff.",
  buttonLabel = 'Subscribe',
  onSubmit,
  style = {},
  ...rest
}) {
  const [email, setEmail] = React.useState('');
  const [hover, setHover] = React.useState(false);
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      background: 'var(--brand)',
      color: '#fff',
      padding: '40px clamp(24px, 5vw, 56px)',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      textAlign: 'center',
      ...style
    },
    ...rest
  }, React.createElement(__ds_scope.Eyebrow, {
    tone: 'light'
  }, eyebrow), React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-h3)',
      letterSpacing: 'var(--ls-heading)',
      margin: 0,
      color: '#fff'
    }
  }, title), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-on-dark-soft)',
      margin: 0,
      maxWidth: '460px'
    }
  }, blurb), React.createElement('form', {
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(email);
    },
    style: {
      display: 'flex',
      gap: '8px',
      width: '100%',
      maxWidth: '440px',
      marginTop: '6px',
      flexWrap: 'wrap'
    }
  }, React.createElement('input', {
    type: 'email',
    required: true,
    placeholder: 'Your email address',
    value: email,
    onChange: e => setEmail(e.target.value),
    style: {
      flex: '1 1 200px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: '#fff',
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid var(--border-on-dark)',
      borderRadius: 'var(--radius-sm)',
      padding: '14px 16px',
      outline: 'none'
    }
  }), React.createElement('button', {
    type: 'submit',
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '11.5px',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-button)',
      textTransform: 'uppercase',
      cursor: 'pointer',
      color: 'var(--brand)',
      background: hover ? 'var(--accent-soft)' : '#fff',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      padding: '14px 28px',
      transition: 'background var(--dur-fast) var(--ease-brand)'
    }
  }, buttonLabel)));
}
Object.assign(__ds_scope, { NewsletterForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NewsletterForm.jsx", error: String((e && e.message) || e) }); }

// redesigns/account/account.js
try { (() => {
/* ==================================================================
   Nēbu Customer Portal — interactions
   ================================================================== */
(function () {
  const D = window.NB_DATA;
  const LOGO = window.__resources && window.__resources.logo || "../../assets/logo-nebu-without-slogan-colour.png";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- placeholder image helper ---------- */
  function ph(cls, label) {
    return `<div class="ph ${cls || ""}"><img class="mark" src="${LOGO}" alt="">${label ? `<span class="lbl">${label}</span>` : ""}</div>`;
  }
  function product(p) {
    return `<div class="card pcard" onclick="NB.toast('Would open ${p.name.replace(/'/g, "")}')">
      <div style="position:relative">
        <span class="heart" onclick="event.stopPropagation();NB.heart(this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 5a5 5 0 0 1 9.5 7c-2.5 4.5-9.5 9-9.5 9Z"/></svg></span>
        ${ph("", "fragrance oil")}
      </div>
      <div class="pc-body">
        <div class="pc-fam">${p.fam}</div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-ins">${p.insp || "Nēbu original"}</div>
        <div class="pc-foot"><span class="pc-price">${p.price}</span><button class="btn outline sm" onclick="event.stopPropagation();NB.toast('Added to cart')">Add</button></div>
      </div>
    </div>`;
  }

  /* ================= navigation ================= */
  function go(name) {
    if (name === "logout") name = "logout";
    $$(".nitem").forEach(b => b.classList.toggle("active", b.dataset.go === name));
    $$(".panel").forEach(p => p.classList.toggle("active", p.dataset.panel === name));
    // reset orders to list view when entering
    if (name === "orders") {
      $("#ordersList").style.display = "";
      $("#orderDetail").style.display = "none";
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  document.addEventListener("click", e => {
    const t = e.target.closest("[data-go]");
    if (t) {
      go(t.dataset.go);
    }
  });

  /* ================= dashboard variant toggle ================= */
  $("#dashSeg").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    $$("#dashSeg button").forEach(x => x.classList.toggle("on", x === b));
    $$(".dash-variant").forEach(v => v.classList.toggle("show", v.dataset.variant === b.dataset.v));
  });

  /* ================= render: dashboard recos ================= */
  $("#dashRecos").innerHTML = D.recos.map(product).join("");
  $("#dashRecosB").innerHTML = D.wishlist.slice(0, 3).map(product).join("");
  $("#profileRecos").innerHTML = D.recos.map(product).join("");
  $("#wishGrid").innerHTML = D.wishlist.map(product).join("");

  /* ================= render: orders table ================= */
  function statusChip(s, label) {
    const map = {
      transit: "amber",
      fulfilled: "ok",
      processing: "muted"
    };
    return `<span class="chip ${map[s] || "muted"}"><span class="d"></span>${label}</span>`;
  }
  $("#ordersBody").innerHTML = D.orders.map(o => {
    const first = o.items[0];
    const more = o.items.length > 1 ? ` <small>+${o.items.length - 1} more item${o.items.length > 2 ? "s" : ""}</small>` : "";
    return `<tr>
      <td data-l="Order"><span class="onum">#${o.id}</span></td>
      <td data-l="Date">${o.date}</td>
      <td data-l="Items"><div class="prod">${ph("mini")}<div class="pn">${first.name}${more}</div></div></td>
      <td data-l="Status">${statusChip(o.status, o.statusLabel)}</td>
      <td data-l="Total"><span class="total">${o.total}</span></td>
      <td data-l=""><span class="linkish" onclick="NB.viewOrder('${o.id}')">View <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></span></td>
    </tr>`;
  }).join("");

  /* ================= order detail ================= */
  function viewOrder(id) {
    const o = D.orders.find(x => x.id === id);
    if (!o) return;
    const steps = [{
      l: "Ordered",
      d: o.date
    }, {
      l: "Processing",
      d: ""
    }, {
      l: "Shipped",
      d: ""
    }, {
      l: "Delivered",
      d: ""
    }];
    let active = o.status === "fulfilled" ? 4 : 3;
    const track = steps.map((s, i) => {
      const done = i < active;
      const now = i === active - 1 && o.status !== "fulfilled";
      return `<div class="step ${done ? "done" : ""} ${now ? "now" : ""}"><div class="dot"></div><div class="s-lbl">${s.l}</div><div class="s-date">${i === 0 ? o.date : i === active - 1 ? o.status === "fulfilled" ? "" : "Est. " + o.arriving.replace("Delivered ", "") : ""}</div></div>`;
    }).join("");
    const lines = o.items.map(it => `<div class="line-item">${ph("mini")}<div class="li-info"><div class="n">${it.name}</div><div class="v">${it.variant} · Qty ${it.qty}</div></div><div class="li-price">${it.price}</div></div>`).join("");
    $("#orderDetail").innerHTML = `
      <span class="back" onclick="NB.backToOrders()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>All orders</span>
      <div class="phead"><div class="row"><div><span class="eyebrow">Order #${o.id}</span><h1 style="margin-top:8px">Order <em>details</em></h1><p class="sub" style="margin-top:6px">Placed ${o.date} · ${statusChip(o.status, o.statusLabel)}</p></div>
        <div style="display:flex;gap:10px"><button class="btn outline sm" onclick="NB.toast('Invoice downloaded')">Invoice</button><button class="btn sm" onclick="NB.toast('Items added to cart')">Reorder</button></div></div></div>
      <div class="card cardpad" style="margin-bottom:18px"><h3 class="tile-h">Shipment status</h3><div class="track">${track}</div>
        <div style="font-size:13px;color:var(--text-secondary);margin-top:14px;display:flex;align-items:center;gap:8px">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--nb-wine)" stroke-width="1.5"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>${o.ship}</div></div>
      <div class="detail-grid">
        <div class="card cardpad"><h3 class="tile-h">Items</h3>${lines}</div>
        <div style="display:flex;flex-direction:column;gap:18px">
          <div class="card cardpad"><h3 class="tile-h">Summary</h3>
            <div class="summary-row"><span>Subtotal</span><span>${o.subtotal}</span></div>
            <div class="summary-row"><span>Shipping</span><span>${o.shipping}</span></div>
            ${o.discount !== "—" ? `<div class="summary-row"><span>Discount</span><span class="save">${o.discount}</span></div>` : ""}
            <div class="summary-row total"><span>Total</span><span>${o.total}</span></div>
            <div class="summary-row" style="margin-top:6px"><span>Points earned</span><span style="color:var(--accent);font-weight:600">${o.points}</span></div>
          </div>
          <div class="card cardpad"><h3 class="tile-h">Shipping to</h3><div class="mt-lines" style="font-size:13.5px;color:var(--text-secondary);line-height:1.7">${o.address}</div></div>
        </div>
      </div>`;
    $("#ordersList").style.display = "none";
    $("#orderDetail").style.display = "block";
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  function backToOrders() {
    $("#orderDetail").style.display = "none";
    $("#ordersList").style.display = "";
  }

  /* ================= subscriptions ================= */
  function renderSubs() {
    $("#subsList").innerHTML = D.subscriptions.map(s => {
      const paused = s.status === "paused";
      return `<div class="card sub-card" style="margin-bottom:18px" data-sub="${s.id}">
        <div class="sub-top">${ph("mini")}
          <div class="s-info"><div class="fam">${s.fam}</div><h3>${s.name}</h3><div class="ins">${s.insp}</div></div>
          <span class="chip ${paused ? "muted" : "ok"}"><span class="d"></span>${paused ? "Paused" : "Active"}</span>
        </div>
        <div class="sub-meta">
          <div class="m"><div class="k">Discount</div><div class="v"><span class="disc">${s.discount} off</span></div></div>
          <div class="m"><div class="k">Frequency</div><div class="v" data-freq>${s.freq}</div></div>
          <div class="m"><div class="k">Price per shipment</div><div class="v">${s.price} <span style="font-weight:400;color:var(--text-muted);text-decoration:line-through;font-size:13px">${s.was}</span></div></div>
          <div class="m"><div class="k">Size</div><div class="v">${s.size}</div></div>
        </div>
        <div class="sub-next">
          <div class="nx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            <span data-next>${paused ? "Paused — resume anytime" : `Next ships <strong>${s.next}</strong> · free shipping`}</span></div>
          <div class="sub-actions">
            <button class="ta" onclick="NB.skip('${s.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 4l10 8-10 8zM19 5v14"/></svg>Skip next</button>
            <button class="ta" onclick="NB.swap('${s.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12a9 9 0 1 1-2.6-6.3M21 4v5h-5"/></svg>Swap scent</button>
            <button class="ta" onclick="NB.freq('${s.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>Frequency</button>
            <button class="ta" onclick="NB.addon('${s.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14"/></svg>Add-on</button>
            <button class="ta ${paused ? "" : "danger"}" onclick="NB.pause('${s.id}')">${paused ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 4l14 8-14 8z"/></svg>Resume` : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 4h3v16H8zM13 4h3v16h-3z"/></svg>Pause`}</button>
          </div>
        </div>
      </div>`;
    }).join("");
  }

  /* ================= modal ================= */
  const overlay = $("#modalOverlay"),
    modal = $("#modal");
  function openModal(html) {
    modal.innerHTML = html;
    overlay.classList.add("open");
  }
  function closeModal() {
    overlay.classList.remove("open");
  }
  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal();
  });

  /* subscription actions */
  function skip(id) {
    const s = D.subscriptions.find(x => x.id === id);
    openModal(`<h3>Skip your <em>next</em> shipment?</h3>
      <p class="mdesc">Your ${s.name} refill scheduled for <strong>${s.next}</strong> will be skipped. You keep your ${s.discount} discount and your next shipment resumes on the following cycle.</p>
      <div class="modal-foot"><button class="btn ghost" onclick="NB.closeModal()">Keep it</button><button class="btn" onclick="NB.doSkip('${id}')">Skip this one</button></div>`);
  }
  function doSkip(id) {
    const s = D.subscriptions.find(x => x.id === id);
    const card = $(`[data-sub="${id}"]`);
    card.querySelector("[data-next]").innerHTML = "Next shipment skipped — resumes after";
    closeModal();
    toast("Next shipment skipped");
  }
  function swap(id) {
    const s = D.subscriptions.find(x => x.id === id);
    const opts = D.swapOptions.map((o, i) => `<div class="swap-opt ${o.name === s.name ? "sel" : ""}" data-i="${i}" onclick="NB.selSwap(this)">
      <div class="mini ph" style="width:48px;height:48px"><img class="mark" src="${LOGO}" style="width:50%"></div>
      <div class="so-info"><div class="n">${o.name}</div><div class="f">${o.fam}</div></div>
      <div class="ck"></div></div>`).join("");
    openModal(`<h3>Swap your <em>scent</em></h3>
      <p class="mdesc">Choose any oil in your tier — the change applies from your next shipment. Your discount and schedule stay the same.</p>
      <div style="max-height:300px;overflow:auto;margin:-4px -4px 0;padding:4px">${opts}</div>
      <div class="modal-foot"><button class="btn ghost" onclick="NB.closeModal()">Cancel</button><button class="btn" onclick="NB.doSwap('${id}')">Confirm swap</button></div>`);
  }
  function selSwap(el) {
    $$(".swap-opt").forEach(x => x.classList.remove("sel"));
    el.classList.add("sel");
  }
  function doSwap(id) {
    const sel = $(".swap-opt.sel");
    const opt = D.swapOptions[+sel.dataset.i];
    const s = D.subscriptions.find(x => x.id === id);
    s.name = opt.name;
    s.fam = opt.fam;
    s.insp = "inspired by your tier";
    renderSubs();
    closeModal();
    toast(`Swapped to ${opt.name}`);
  }
  function freq(id) {
    const s = D.subscriptions.find(x => x.id === id);
    const choices = ["Monthly", "Every 2 months", "Every 3 months"];
    const rows = choices.map(c => `<div class="swap-opt ${c === s.freq ? "sel" : ""}" data-f="${c}" onclick="NB.selSwap(this)">
      <div class="so-info"><div class="n">${c}</div><div class="f">${c === "Monthly" ? "35% off" : "30% off"} · free shipping</div></div><div class="ck"></div></div>`).join("");
    openModal(`<h3>Delivery <em>frequency</em></h3>
      <p class="mdesc">How often should we send your ${s.name} refill?</p>${rows}
      <div class="modal-foot"><button class="btn ghost" onclick="NB.closeModal()">Cancel</button><button class="btn" onclick="NB.doFreq('${id}')">Save frequency</button></div>`);
  }
  function doFreq(id) {
    const sel = $(".swap-opt.sel");
    const f = sel.dataset.f;
    const s = D.subscriptions.find(x => x.id === id);
    s.freq = f;
    renderSubs();
    closeModal();
    toast("Frequency updated");
  }
  function addon(id) {
    const opts = D.wishlist.slice(0, 4).map((o, i) => `<div class="swap-opt" data-i="${i}" onclick="NB.selSwap(this)">
      <div class="mini ph" style="width:48px;height:48px"><img class="mark" src="${LOGO}" style="width:50%"></div>
      <div class="so-info"><div class="n">${o.name}</div><div class="f">${o.fam} · ${o.price}</div></div><div class="ck"></div></div>`).join("");
    openModal(`<h3>Add a <em>one-time</em> item</h3>
      <p class="mdesc">Add an extra oil to your next shipment only — it ships with your subscription and earns points too.</p>${opts}
      <div class="modal-foot"><button class="btn ghost" onclick="NB.closeModal()">Cancel</button><button class="btn" onclick="NB.closeModal();NB.toast('Added to next shipment')">Add to next box</button></div>`);
  }
  function pause(id) {
    const s = D.subscriptions.find(x => x.id === id);
    if (s.status === "paused") {
      s.status = "active";
      renderSubs();
      toast("Subscription resumed");
      return;
    }
    openModal(`<h3>Pause your <em>subscription</em>?</h3>
      <p class="mdesc">We'll hold your ${s.name} refill until you're ready. No charges while paused — resume in one tap and keep your ${s.discount} discount.</p>
      <div class="modal-foot"><button class="btn ghost" onclick="NB.closeModal()">Keep active</button><button class="btn" onclick="NB.doPause('${id}')">Pause</button></div>`);
  }
  function doPause(id) {
    const s = D.subscriptions.find(x => x.id === id);
    s.status = "paused";
    renderSubs();
    closeModal();
    toast("Subscription paused");
  }

  /* ================= rewards ================= */
  $("#redeemList").innerHTML = D.redeem.map(r => `<div class="card redeem">
    <div class="amt">${r.amt}<div style="font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:var(--text-muted);font-family:var(--font-sans)">pts</div></div>
    <div class="r-info"><div class="n">${r.name}</div><div class="c">${r.code}</div></div>
    <button class="btn outline sm" onclick="NB.toast('Reward code ready at checkout')">Redeem</button></div>`).join("");
  const earnIcons = {
    bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>',
    star: '<path d="M12 3l2.6 6.3L21 10l-5 4 1.5 6.5L12 17l-5.5 3.5L8 14l-5-4 6.4-.7z"/>',
    gift: '<rect x="3" y="8" width="18" height="13" rx="1"/><path d="M12 8v13M3 12h18"/>',
    cake: '<path d="M4 21h16M5 21v-7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v7M12 8V4M12 4l-1.5-1.5M12 4l1.5-1.5"/>',
    insta: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17" cy="7" r="1"/>',
    sub: '<path d="M21 12a9 9 0 1 1-2.6-6.3M21 4v5h-5"/>'
  };
  $("#earnList").innerHTML = D.earn.map(e => `<div class="card earn">
    <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">${earnIcons[e.ico]}</svg></div>
    <div class="e-info"><div class="n">${e.n}</div><div class="d">${e.d}</div><div class="pts">${e.pts}</div></div></div>`).join("");

  /* ================= scent profile tags ================= */
  $("#prefTags").innerHTML = D.prefTags.map(t => `<button class="tag ${D.prefOn.includes(t) ? "on" : ""}" onclick="this.classList.toggle('on')">${t}</button>`).join("");

  /* ================= addresses ================= */
  $("#addrGrid").innerHTML = D.addresses.map((a, i) => `<div class="card mini-tile ${a.default ? "default" : ""}">
    ${a.default ? '<span class="chip wine badge-def"><span class="d"></span>Default</span>' : ""}
    <div class="mt-name">${a.label} · ${a.name}</div>
    <div class="mt-lines">${a.lines.join("<br>")}</div>
    <div class="mt-actions"><a onclick="NB.toast('Edit address form')">Edit</a>${a.default ? "" : '<a onclick="NB.toast(\'Set as default\')">Set default</a>'}<a class="del" onclick="NB.toast('Remove address')">Remove</a></div>
  </div>`).join("") + `<div class="add-tile" onclick="NB.toast('Add address form would open')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14"/></svg><span>Add address</span></div>`;

  /* ================= faq accordion ================= */
  $("#faq").addEventListener("click", e => {
    const q = e.target.closest(".q");
    if (!q) return;
    q.classList.toggle("open");
  });

  /* ================= toast / misc ================= */
  let toastT;
  function toast(msg) {
    $("#toastMsg").textContent = msg;
    $("#toast").classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(() => $("#toast").classList.remove("show"), 2400);
  }
  function heart(el) {
    el.style.opacity = ".35";
    toast("Removed from wishlist");
  }
  function copyCode() {
    const c = $("#referCode").textContent;
    navigator.clipboard && navigator.clipboard.writeText("https://nebuluxury.com/?ref=" + c).catch(() => {});
    toast("Referral link copied");
  }

  /* header shadow on scroll */
  window.addEventListener("scroll", () => {
    $("#siteHeader").style.boxShadow = window.scrollY > 8 ? "var(--shadow-sm)" : "none";
  });

  /* ================= init ================= */
  renderSubs();
  window.NB = {
    go,
    viewOrder,
    backToOrders,
    skip,
    doSkip,
    swap,
    selSwap,
    doSwap,
    freq,
    doFreq,
    addon,
    pause,
    doPause,
    closeModal,
    toast,
    heart,
    copyCode
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesigns/account/account.js", error: String((e && e.message) || e) }); }

// redesigns/account/data.js
try { (() => {
/* ==================================================================
   Nēbu Customer Portal — mock data
   Replace with live Shopify / Appstle data on handoff.
   ================================================================== */
window.NB_DATA = {
  orders: [{
    id: "1042",
    date: "Jun 13, 2026",
    status: "transit",
    statusLabel: "Out for delivery",
    total: "$248.00",
    items: [{
      name: "NL200 Bluetooth Diffuser",
      variant: "Matte Black",
      price: "$199.00",
      qty: 1,
      fam: "Diffuser"
    }, {
      name: "Miami Serenity",
      variant: "30ml oil · Hotel",
      price: "$49.00",
      qty: 1,
      fam: "Hotel"
    }],
    ship: "USPS Priority · 9400 1234 5678",
    arriving: "Jun 15, 2026",
    address: "Elena Marchetti · 88 Vallejo St, Apt 4, San Francisco, CA 94133",
    subtotal: "$248.00",
    shipping: "Free",
    discount: "—",
    points: "+248"
  }, {
    id: "1041",
    date: "Jun 02, 2026",
    status: "fulfilled",
    statusLabel: "Delivered",
    total: "$31.50",
    items: [{
      name: "Miami Serenity",
      variant: "30ml refill · Subscription",
      price: "$31.50",
      qty: 1,
      fam: "Hotel"
    }],
    ship: "USPS First Class · delivered Jun 05",
    arriving: "Delivered Jun 05, 2026",
    address: "Elena Marchetti · 88 Vallejo St, Apt 4, San Francisco, CA 94133",
    subtotal: "$45.00",
    shipping: "Free",
    discount: "−$13.50 (30%)",
    points: "+47"
  }, {
    id: "1018",
    date: "May 28, 2026",
    status: "fulfilled",
    statusLabel: "Delivered",
    total: "$29.25",
    items: [{
      name: "Velvet Rouge",
      variant: "30ml refill · Subscription",
      price: "$29.25",
      qty: 1,
      fam: "Designer"
    }],
    ship: "USPS First Class · delivered May 31",
    arriving: "Delivered May 31, 2026",
    address: "Elena Marchetti · 88 Vallejo St, Apt 4, San Francisco, CA 94133",
    subtotal: "$45.00",
    shipping: "Free",
    discount: "−$15.75 (35%)",
    points: "+44"
  }, {
    id: "0994",
    date: "Apr 16, 2026",
    status: "fulfilled",
    statusLabel: "Delivered",
    total: "$138.00",
    items: [{
      name: "The Hotel Edit",
      variant: "Bundle · 3 oils",
      price: "$115.00",
      qty: 1,
      fam: "Bundle"
    }, {
      name: "Open Skies",
      variant: "30ml oil · Designer",
      price: "$23.00",
      qty: 1,
      fam: "Designer"
    }],
    ship: "UPS Ground · delivered Apr 20",
    arriving: "Delivered Apr 20, 2026",
    address: "Elena Marchetti · 88 Vallejo St, Apt 4, San Francisco, CA 94133",
    subtotal: "$160.00",
    shipping: "Free",
    discount: "−$22.00 (bundle)",
    points: "+138"
  }, {
    id: "0951",
    date: "Feb 09, 2026",
    status: "fulfilled",
    statusLabel: "Delivered",
    total: "$49.00",
    items: [{
      name: "Velvet Rouge",
      variant: "30ml oil · Designer",
      price: "$49.00",
      qty: 1,
      fam: "Designer"
    }],
    ship: "USPS First Class · delivered Feb 13",
    arriving: "Delivered Feb 13, 2026",
    address: "Elena Marchetti · 88 Vallejo St, Apt 4, San Francisco, CA 94133",
    subtotal: "$49.00",
    shipping: "Free",
    discount: "—",
    points: "+49"
  }],
  subscriptions: [{
    id: "sub1",
    name: "Miami Serenity",
    fam: "Hotel",
    insp: "inspired by The One Hotel®",
    size: "30ml refill",
    status: "active",
    plan: "30% off · every 2 months",
    freq: "Every 2 months",
    price: "$31.50",
    was: "$45.00",
    next: "Jun 20, 2026",
    discount: "30%"
  }, {
    id: "sub2",
    name: "Velvet Rouge",
    fam: "Designer",
    insp: "inspired by Baccarat Rouge 540®",
    size: "30ml refill",
    status: "active",
    plan: "35% off · monthly",
    freq: "Monthly",
    price: "$29.25",
    was: "$45.00",
    next: "Jun 28, 2026",
    discount: "35%"
  }],
  swapOptions: [{
    name: "Open Skies",
    fam: "Designer"
  }, {
    name: "Velvet Rouge",
    fam: "Designer"
  }, {
    name: "Midnight Luxe",
    fam: "Designer"
  }, {
    name: "New York Mystify",
    fam: "Hotel"
  }, {
    name: "Prestige",
    fam: "Hotel"
  }, {
    name: "Nordic Amber",
    fam: "Designer"
  }],
  redeem: [{
    amt: "500",
    name: "$5 off your order",
    code: "Applies at checkout"
  }, {
    amt: "1,000",
    name: "$12 off your order",
    code: "Best value"
  }, {
    amt: "2,500",
    name: "$30 off your order",
    code: "Applies at checkout"
  }, {
    amt: "2,000",
    name: "Free 30ml fragrance oil",
    code: "Any Hotel or Designer scent"
  }],
  earn: [{
    ico: "bag",
    n: "Place an order",
    d: "1.5 points for every $1 spent at your tier.",
    pts: "1.5× per $1"
  }, {
    ico: "star",
    n: "Write a review",
    d: "Share your thoughts on a scent or diffuser.",
    pts: "+50 pts"
  }, {
    ico: "gift",
    n: "Refer a friend",
    d: "When they place their first order.",
    pts: "+250 pts"
  }, {
    ico: "cake",
    n: "Celebrate your birthday",
    d: "A little something on your special day.",
    pts: "+100 pts"
  }, {
    ico: "insta",
    n: "Follow on Instagram",
    d: "One-time bonus for joining the room.",
    pts: "+25 pts"
  }, {
    ico: "sub",
    n: "Start a subscription",
    d: "Bonus on your first recurring shipment.",
    pts: "+150 pts"
  }],
  wishlist: [{
    name: "Open Skies",
    fam: "Designer",
    insp: "inspired by Santal 33®",
    price: "$49.00"
  }, {
    name: "Royal Venture",
    fam: "Designer",
    insp: "inspired by Aventus by Creed®",
    price: "$49.00"
  }, {
    name: "Black Tie",
    fam: "Hotel",
    insp: "inspired by Edition Hotel®",
    price: "$49.00"
  }, {
    name: "Nordic Amber",
    fam: "Designer",
    insp: "inspired by Baltic Amber®",
    price: "$49.00"
  }, {
    name: "Dream Weaver",
    fam: "Hotel",
    insp: "inspired by Dreams Resort®",
    price: "$49.00"
  }, {
    name: "Velvet Rouge",
    fam: "Designer",
    insp: "inspired by Baccarat Rouge 540®",
    price: "$49.00"
  }],
  recos: [{
    name: "Midnight Luxe",
    fam: "Designer",
    insp: "inspired by Mercedes-Benz®",
    price: "$49.00"
  }, {
    name: "New York Mystify",
    fam: "Hotel",
    insp: "inspired by The Plaza Hotel®",
    price: "$49.00"
  }, {
    name: "Nordic Amber",
    fam: "Designer",
    insp: "inspired by Baltic Amber®",
    price: "$49.00"
  }],
  prefTags: ["Woodsy", "Amber", "Hotel collection", "Sandalwood", "Aquatic", "Vetiver", "Warm spice", "Leather", "Citrus", "Vanilla"],
  prefOn: ["Woodsy", "Amber", "Hotel collection", "Sandalwood", "Vetiver"],
  addresses: [{
    name: "Elena Marchetti",
    lines: ["88 Vallejo Street, Apt 4", "San Francisco, CA 94133", "United States", "+1 (415) 555-0182"],
    default: true,
    label: "Home"
  }, {
    name: "Elena Marchetti",
    lines: ["450 Market Street, Floor 12", "San Francisco, CA 94105", "United States", "+1 (415) 555-0182"],
    default: false,
    label: "Office"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesigns/account/data.js", error: String((e && e.message) || e) }); }

// redesigns/fragrances/data.js
try { (() => {
/* Nēbu fragrance library — full catalog (42 oils) */
window.NB_FRAG = [{
  name: "Miami Serenity",
  col: "Hotel",
  insp: "The One Hotel®",
  fam: ["woodsy"],
  best: true,
  top: ["Leather", "Cardamom", "Lemon"],
  mid: ["Sandalwood", "Cedarwood", "Cinnamon"],
  base: ["Vetiver", "Musk", "Iris"]
}, {
  name: "Penthouse",
  col: "Designer",
  insp: "Abercrombie & Fitch®",
  fam: ["woodsy"],
  best: true,
  top: ["Fir", "Citruses", "Herbal"],
  mid: ["Floral", "Lily"],
  base: ["Vetiver", "Musk", "Woods"]
}, {
  name: "Dream Weaver",
  col: "Hotel",
  insp: "Dreams Resort by Hyatt®",
  fam: ["spa", "woodsy"],
  best: true,
  top: ["White Tea", "Aloe Vera", "Ginger"],
  mid: ["Cedarwood", "Vanilla", "Amber"],
  base: ["Lily", "Sandalwood", "Musk"]
}, {
  name: "Blue Water Zest",
  col: "Designer",
  insp: "Acqua di Giò®",
  fam: ["fresh"],
  top: ["Bergamot"],
  mid: ["Geranium", "Rosemary", "Lavender"],
  base: ["Patchouli"]
}, {
  name: "New York Mystify",
  col: "Hotel",
  insp: "The Plaza Hotel®",
  fam: ["fresh", "woodsy"],
  top: ["Lavender", "Bergamot", "Mint"],
  mid: ["Cinnamon", "Orange Blossom"],
  base: ["Vanilla", "Amber", "Sandalwood"]
}, {
  name: "Prestige",
  col: "Hotel",
  insp: "Ritz-Carlton®",
  fam: ["fresh"],
  top: ["Lemon", "Bergamot"],
  mid: ["Ocean", "Jasmine"],
  base: ["Amber", "Musk"]
}, {
  name: "Halo Kiss",
  col: "Designer",
  insp: "Sweet Grace®",
  fam: ["fruity", "tropics"],
  top: ["Passion Fruit"],
  mid: ["Tea Notes"],
  base: ["Patchouli"]
}, {
  name: "White Tea",
  col: "Hotel",
  insp: "Westin Hotels®",
  fam: ["fresh", "spa"],
  top: ["Green", "Lemon", "Orange"],
  mid: ["Clove", "Lavender"],
  base: ["Musk"]
}, {
  name: "Midnight Luxe",
  col: "Designer",
  insp: "Mercedes-Benz®",
  fam: ["woodsy"],
  top: ["Bergamot", "Lemon", "Mandarin"],
  mid: ["Violet", "Pepper", "Nutmeg"],
  base: ["Vetiver", "Patchouli", "Cedarwood"]
}, {
  name: "City Lights",
  col: "Hotel",
  insp: "Atlantis Hotel®",
  fam: ["floral", "woodsy"],
  top: ["Neroli", "Orange", "Melon"],
  mid: ["Orange Blossom", "Jasmine", "Ocean"],
  base: ["Cedarwood", "Vanilla", "Musk"]
}, {
  name: "Pure Lavender",
  col: "Original",
  insp: "",
  fam: ["floral", "spa"],
  top: ["Lavender"],
  mid: ["Lavender"],
  base: ["Woods", "Musk"]
}, {
  name: "Velvet Rouge",
  col: "Designer",
  insp: "Baccarat Rouge 540®",
  fam: ["floral", "woodsy"],
  top: ["Jasmine", "Saffron"],
  mid: ["Fir Resin", "Cedar"],
  base: ["Amberwood", "Ambergris"]
}, {
  name: "Open Skies",
  col: "Designer",
  insp: "Santal 33®",
  fam: ["fresh", "woodsy"],
  top: ["Cardamom", "Cucumber", "Mint"],
  mid: ["Iris"],
  base: ["Violet", "Sandalwood", "Cedarwood"]
}, {
  name: "Orange Radiance",
  col: "Designer",
  insp: "Atelier Orange Sanguine®",
  fam: ["fresh", "floral"],
  top: ["Blood Orange", "Bitter Orange"],
  mid: ["Jasmine", "Geranium"],
  base: ["Amber", "Sandalwood", "Tonka Bean"]
}, {
  name: "Royal Venture",
  col: "Designer",
  insp: "Aventus by Creed®",
  fam: ["fruity", "woodsy"],
  top: ["Pineapple", "Black Currant", "Apple"],
  mid: ["Birch", "Patchouli", "Rose"],
  base: ["Musk", "Vetiver", "Vanilla"]
}, {
  name: "Black Tie",
  col: "Hotel",
  insp: "Edition Hotel®",
  fam: ["floral", "woodsy"],
  top: ["Lemon", "Bergamot", "Black Fig"],
  mid: ["Freesia", "Rose", "Cedarwood"],
  base: ["Amber", "Musk", "Woods"]
}, {
  name: "Mango Bliss",
  col: "Original",
  insp: "",
  fam: ["fruity", "tropics"],
  top: ["Orange", "Mango", "Lemon"],
  mid: ["Floral", "Peach"],
  base: ["Raspberry", "Woods", "Musk"]
}, {
  name: "Nordic Amber",
  col: "Designer",
  insp: "Baltic Amber by Voluspa®",
  fam: ["woodsy"],
  top: ["Orange", "Lemongrass"],
  mid: ["Violet", "Cedarwood"],
  base: ["Sandalwood", "Amber", "Vanilla"]
}, {
  name: "Oakmoss Oasis",
  col: "Original",
  insp: "",
  fam: ["spa", "woodsy"],
  top: ["Grapefruit", "Orange"],
  mid: ["Lavender", "Sage"],
  base: ["Amber", "Oakmoss", "Tonka Bean"]
}, {
  name: "Vintage Woodland",
  col: "Original",
  insp: "",
  fam: ["woodsy"],
  top: ["Lavender", "Geranium"],
  mid: ["Mahogany"],
  base: ["Cedarwood", "Oak"]
}, {
  name: "Crisp Mint Eucalyptus",
  col: "Original",
  insp: "Eucalyptus Spearmint™",
  fam: ["fresh", "spa"],
  top: ["Eucalyptus", "Spearmint"],
  mid: ["Citrus"],
  base: ["Musk", "Amber"]
}, {
  name: "Piña Colada Paradise",
  col: "Original",
  insp: "",
  fam: ["fruity", "tropics"],
  top: ["Pineapple"],
  mid: ["Coconut Milk"],
  base: ["Banana", "Vanilla"]
}, {
  name: "Tropical Bliss",
  col: "Original",
  insp: "",
  fam: ["fruity", "tropics"],
  top: ["Citruses", "Fruits"],
  mid: ["Coconut"],
  base: ["Vanilla", "Tropical Florals"]
}, {
  name: "Dubai Mirage",
  col: "Hotel",
  insp: "Burj Al Arab®",
  fam: ["floral", "fresh"],
  top: ["Lemon", "Melon", "Jasmine"],
  mid: ["Lily", "Jasmine"],
  base: ["Raspberry", "Oakmoss", "Musk"]
}, {
  name: "Tropic Zest",
  col: "Designer",
  insp: "",
  fam: ["fresh", "fruity"],
  top: ["Lemon", "Lime"],
  mid: ["Fruits"],
  base: ["Greens", "Sugar"]
}, {
  name: "Coastal Drift",
  col: "Designer",
  insp: "Breakline by Hollister®",
  fam: ["fresh"],
  top: ["Mandarin Orange"],
  mid: ["Sea Water"],
  base: ["Sage", "Driftwood"]
}, {
  name: "Island Seashore",
  col: "Original",
  insp: "Santal Tropics™",
  fam: ["tropics", "woodsy"],
  top: ["Coconut Milk", "Orange"],
  mid: ["Coconut", "Light Musk"],
  base: ["Amyris", "Cedar", "Sandalwood"]
}, {
  name: "Sacred Palo Santo",
  col: "Original",
  insp: "",
  fam: ["woodsy"],
  top: ["Cardamom", "Citrus"],
  mid: ["Saffron", "Palo Santo"],
  base: ["Sandalwood", "Amber", "Smoke"]
}, {
  name: "Soft Whisper Linen",
  col: "Original",
  insp: "",
  fam: ["floral", "fresh"],
  top: ["Lemon", "Orange", "Apple"],
  mid: ["Jasmine", "Orange Blossom"],
  base: ["Musk"]
}, {
  name: "Sensual Essence",
  col: "Hotel",
  insp: "The Aria Hotel®",
  fam: ["fruity"],
  top: ["Lemon Crème", "Pomegranate"],
  mid: ["Peony", "Raspberry"],
  base: ["Vanilla", "White Woods"]
}, {
  name: "Bohemian Whisper",
  col: "Designer",
  insp: "Gypsy Water by Byredo®",
  fam: ["woodsy"],
  top: ["Bergamot", "Juniper", "Pepper"],
  mid: ["Incense", "Pine Needles", "Orris"],
  base: ["Amber", "Vanilla", "Sandalwood"]
}, {
  name: "Nighttime Bloom",
  col: "Designer",
  insp: "E11even™",
  fam: ["floral", "woodsy"],
  top: ["Citrus"],
  mid: ["Geranium", "Rose"],
  base: ["Amber", "Patchouli"]
}, {
  name: "Jeweled Blossom",
  col: "Designer",
  insp: "",
  fam: ["floral", "woodsy"],
  top: ["Bergamot", "Sweet Berry"],
  mid: ["Jasmine", "Saffron"],
  base: ["Amber", "Oud", "Sandalwood"]
}, {
  name: "Madrid Passion",
  col: "Hotel",
  insp: "The Westin Palace®",
  fam: ["floral"],
  top: ["Gardenia", "Freesia"],
  mid: ["Pomegranate", "Lily"],
  base: ["Cashmere", "Woods"]
}, {
  name: "Casablanca Allure",
  col: "Hotel",
  insp: "The Four Seasons®",
  fam: ["floral"],
  top: ["Orange", "Petitgrain"],
  mid: ["Orange Flower", "Jasmine", "Rose"],
  base: ["Jasmine", "Neroli"]
}, {
  name: "London Majesty",
  col: "Hotel",
  insp: "The Savoy®",
  fam: ["woodsy"],
  top: ["Spices", "Tobacco"],
  mid: ["Vanilla", "Cacao"],
  base: ["Wood Notes"]
}, {
  name: "Paris Elegance",
  col: "Hotel",
  insp: "W Hotel®",
  fam: ["floral", "fresh"],
  top: ["Bergamot", "Lemon", "Lemongrass"],
  mid: ["Magnolia", "Jasmine", "Lily"],
  base: ["Koa Wood", "Musk"]
}, {
  name: "Singapore Splendor",
  col: "Hotel",
  insp: "Marina Bay Sands®",
  fam: ["floral", "woodsy"],
  top: ["Cassis", "Peppercorn", "White Rose"],
  mid: ["Geranium", "Tonka Bean"],
  base: ["Oakmoss", "Cedarwood", "Musk"]
}, {
  name: "Pumpkin Spiced Harvest",
  col: "Seasonal",
  insp: "",
  fam: ["fruity"],
  top: ["Spiced Pumpkin"],
  mid: ["Coffee"],
  base: ["Cinnamon Sugar"]
}, {
  name: "Vanilla Pumpkin Mallow Mist",
  col: "Seasonal",
  insp: "",
  fam: ["fruity"],
  top: ["Pumpkin"],
  mid: ["Marshmallow"],
  base: ["Cream", "Vanilla"]
}, {
  name: "Peppermint Twilight",
  col: "Seasonal",
  insp: "",
  fam: ["fresh", "spa"],
  top: ["Peppermint"],
  mid: ["Mint", "Eucalyptus"],
  base: ["Vanilla", "Sandalwood"]
}, {
  name: "Winter Pine Whisper",
  col: "Seasonal",
  insp: "",
  fam: ["woodsy"],
  top: ["Pine"],
  mid: ["Raspberry"],
  base: ["Caramel", "Vanilla"]
}];

/* scent-family meta — muted, cream-friendly accents */
window.NB_FAMILIES_MAP = {
  fresh: {
    label: "Fresh",
    color: "#6f93a6",
    note: "Citrus, aquatic, cool air"
  },
  floral: {
    label: "Floral",
    color: "#c2849a",
    note: "Jasmine, rose, blossom"
  },
  fruity: {
    label: "Fruity",
    color: "#c2724f",
    note: "Berry, stone fruit, sweet"
  },
  woodsy: {
    label: "Woodsy",
    color: "#8a6240",
    note: "Sandalwood, cedar, amber"
  },
  tropics: {
    label: "Tropics",
    color: "#c79a45",
    note: "Coconut, pineapple, sun"
  },
  spa: {
    label: "Spa",
    color: "#7f9a82",
    note: "Eucalyptus, tea, calm"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesigns/fragrances/data.js", error: String((e && e.message) || e) }); }

// redesigns/homepage/data.js
try { (() => {
/* Nēbu fragrance library — full catalog (42 oils) */
window.NB_FRAG = [{
  name: "Miami Serenity",
  col: "Hotel",
  insp: "The One Hotel®",
  fam: ["woodsy"],
  best: true,
  top: ["Leather", "Cardamom", "Lemon"],
  mid: ["Sandalwood", "Cedarwood", "Cinnamon"],
  base: ["Vetiver", "Musk", "Iris"]
}, {
  name: "Penthouse",
  col: "Designer",
  insp: "Abercrombie & Fitch®",
  fam: ["woodsy"],
  best: true,
  top: ["Fir", "Citruses", "Herbal"],
  mid: ["Floral", "Lily"],
  base: ["Vetiver", "Musk", "Woods"]
}, {
  name: "Dream Weaver",
  col: "Hotel",
  insp: "Dreams Resort by Hyatt®",
  fam: ["spa", "woodsy"],
  best: true,
  top: ["White Tea", "Aloe Vera", "Ginger"],
  mid: ["Cedarwood", "Vanilla", "Amber"],
  base: ["Lily", "Sandalwood", "Musk"]
}, {
  name: "Blue Water Zest",
  col: "Designer",
  insp: "Acqua di Giò®",
  fam: ["fresh"],
  top: ["Bergamot"],
  mid: ["Geranium", "Rosemary", "Lavender"],
  base: ["Patchouli"]
}, {
  name: "New York Mystify",
  col: "Hotel",
  insp: "The Plaza Hotel®",
  fam: ["fresh", "woodsy"],
  top: ["Lavender", "Bergamot", "Mint"],
  mid: ["Cinnamon", "Orange Blossom"],
  base: ["Vanilla", "Amber", "Sandalwood"]
}, {
  name: "Prestige",
  col: "Hotel",
  insp: "Ritz-Carlton®",
  fam: ["fresh"],
  top: ["Lemon", "Bergamot"],
  mid: ["Ocean", "Jasmine"],
  base: ["Amber", "Musk"]
}, {
  name: "Halo Kiss",
  col: "Designer",
  insp: "Sweet Grace®",
  fam: ["fruity", "tropics"],
  top: ["Passion Fruit"],
  mid: ["Tea Notes"],
  base: ["Patchouli"]
}, {
  name: "White Tea",
  col: "Hotel",
  insp: "Westin Hotels®",
  fam: ["fresh", "spa"],
  top: ["Green", "Lemon", "Orange"],
  mid: ["Clove", "Lavender"],
  base: ["Musk"]
}, {
  name: "Midnight Luxe",
  col: "Designer",
  insp: "Mercedes-Benz®",
  fam: ["woodsy"],
  top: ["Bergamot", "Lemon", "Mandarin"],
  mid: ["Violet", "Pepper", "Nutmeg"],
  base: ["Vetiver", "Patchouli", "Cedarwood"]
}, {
  name: "City Lights",
  col: "Hotel",
  insp: "Atlantis Hotel®",
  fam: ["floral", "woodsy"],
  top: ["Neroli", "Orange", "Melon"],
  mid: ["Orange Blossom", "Jasmine", "Ocean"],
  base: ["Cedarwood", "Vanilla", "Musk"]
}, {
  name: "Pure Lavender",
  col: "Original",
  insp: "",
  fam: ["floral", "spa"],
  top: ["Lavender"],
  mid: ["Lavender"],
  base: ["Woods", "Musk"]
}, {
  name: "Velvet Rouge",
  col: "Designer",
  insp: "Baccarat Rouge 540®",
  fam: ["floral", "woodsy"],
  top: ["Jasmine", "Saffron"],
  mid: ["Fir Resin", "Cedar"],
  base: ["Amberwood", "Ambergris"]
}, {
  name: "Open Skies",
  col: "Designer",
  insp: "Santal 33®",
  fam: ["fresh", "woodsy"],
  top: ["Cardamom", "Cucumber", "Mint"],
  mid: ["Iris"],
  base: ["Violet", "Sandalwood", "Cedarwood"]
}, {
  name: "Orange Radiance",
  col: "Designer",
  insp: "Atelier Orange Sanguine®",
  fam: ["fresh", "floral"],
  top: ["Blood Orange", "Bitter Orange"],
  mid: ["Jasmine", "Geranium"],
  base: ["Amber", "Sandalwood", "Tonka Bean"]
}, {
  name: "Royal Venture",
  col: "Designer",
  insp: "Aventus by Creed®",
  fam: ["fruity", "woodsy"],
  top: ["Pineapple", "Black Currant", "Apple"],
  mid: ["Birch", "Patchouli", "Rose"],
  base: ["Musk", "Vetiver", "Vanilla"]
}, {
  name: "Black Tie",
  col: "Hotel",
  insp: "Edition Hotel®",
  fam: ["floral", "woodsy"],
  top: ["Lemon", "Bergamot", "Black Fig"],
  mid: ["Freesia", "Rose", "Cedarwood"],
  base: ["Amber", "Musk", "Woods"]
}, {
  name: "Mango Bliss",
  col: "Original",
  insp: "",
  fam: ["fruity", "tropics"],
  top: ["Orange", "Mango", "Lemon"],
  mid: ["Floral", "Peach"],
  base: ["Raspberry", "Woods", "Musk"]
}, {
  name: "Nordic Amber",
  col: "Designer",
  insp: "Baltic Amber by Voluspa®",
  fam: ["woodsy"],
  top: ["Orange", "Lemongrass"],
  mid: ["Violet", "Cedarwood"],
  base: ["Sandalwood", "Amber", "Vanilla"]
}, {
  name: "Oakmoss Oasis",
  col: "Original",
  insp: "",
  fam: ["spa", "woodsy"],
  top: ["Grapefruit", "Orange"],
  mid: ["Lavender", "Sage"],
  base: ["Amber", "Oakmoss", "Tonka Bean"]
}, {
  name: "Vintage Woodland",
  col: "Original",
  insp: "",
  fam: ["woodsy"],
  top: ["Lavender", "Geranium"],
  mid: ["Mahogany"],
  base: ["Cedarwood", "Oak"]
}, {
  name: "Crisp Mint Eucalyptus",
  col: "Original",
  insp: "Eucalyptus Spearmint™",
  fam: ["fresh", "spa"],
  top: ["Eucalyptus", "Spearmint"],
  mid: ["Citrus"],
  base: ["Musk", "Amber"]
}, {
  name: "Piña Colada Paradise",
  col: "Original",
  insp: "",
  fam: ["fruity", "tropics"],
  top: ["Pineapple"],
  mid: ["Coconut Milk"],
  base: ["Banana", "Vanilla"]
}, {
  name: "Tropical Bliss",
  col: "Original",
  insp: "",
  fam: ["fruity", "tropics"],
  top: ["Citruses", "Fruits"],
  mid: ["Coconut"],
  base: ["Vanilla", "Tropical Florals"]
}, {
  name: "Dubai Mirage",
  col: "Hotel",
  insp: "Burj Al Arab®",
  fam: ["floral", "fresh"],
  top: ["Lemon", "Melon", "Jasmine"],
  mid: ["Lily", "Jasmine"],
  base: ["Raspberry", "Oakmoss", "Musk"]
}, {
  name: "Tropic Zest",
  col: "Designer",
  insp: "",
  fam: ["fresh", "fruity"],
  top: ["Lemon", "Lime"],
  mid: ["Fruits"],
  base: ["Greens", "Sugar"]
}, {
  name: "Coastal Drift",
  col: "Designer",
  insp: "Breakline by Hollister®",
  fam: ["fresh"],
  top: ["Mandarin Orange"],
  mid: ["Sea Water"],
  base: ["Sage", "Driftwood"]
}, {
  name: "Island Seashore",
  col: "Original",
  insp: "Santal Tropics™",
  fam: ["tropics", "woodsy"],
  top: ["Coconut Milk", "Orange"],
  mid: ["Coconut", "Light Musk"],
  base: ["Amyris", "Cedar", "Sandalwood"]
}, {
  name: "Sacred Palo Santo",
  col: "Original",
  insp: "",
  fam: ["woodsy"],
  top: ["Cardamom", "Citrus"],
  mid: ["Saffron", "Palo Santo"],
  base: ["Sandalwood", "Amber", "Smoke"]
}, {
  name: "Soft Whisper Linen",
  col: "Original",
  insp: "",
  fam: ["floral", "fresh"],
  top: ["Lemon", "Orange", "Apple"],
  mid: ["Jasmine", "Orange Blossom"],
  base: ["Musk"]
}, {
  name: "Sensual Essence",
  col: "Hotel",
  insp: "The Aria Hotel®",
  fam: ["fruity"],
  top: ["Lemon Crème", "Pomegranate"],
  mid: ["Peony", "Raspberry"],
  base: ["Vanilla", "White Woods"]
}, {
  name: "Bohemian Whisper",
  col: "Designer",
  insp: "Gypsy Water by Byredo®",
  fam: ["woodsy"],
  top: ["Bergamot", "Juniper", "Pepper"],
  mid: ["Incense", "Pine Needles", "Orris"],
  base: ["Amber", "Vanilla", "Sandalwood"]
}, {
  name: "Nighttime Bloom",
  col: "Designer",
  insp: "E11even™",
  fam: ["floral", "woodsy"],
  top: ["Citrus"],
  mid: ["Geranium", "Rose"],
  base: ["Amber", "Patchouli"]
}, {
  name: "Jeweled Blossom",
  col: "Designer",
  insp: "",
  fam: ["floral", "woodsy"],
  top: ["Bergamot", "Sweet Berry"],
  mid: ["Jasmine", "Saffron"],
  base: ["Amber", "Oud", "Sandalwood"]
}, {
  name: "Madrid Passion",
  col: "Hotel",
  insp: "The Westin Palace®",
  fam: ["floral"],
  top: ["Gardenia", "Freesia"],
  mid: ["Pomegranate", "Lily"],
  base: ["Cashmere", "Woods"]
}, {
  name: "Casablanca Allure",
  col: "Hotel",
  insp: "The Four Seasons®",
  fam: ["floral"],
  top: ["Orange", "Petitgrain"],
  mid: ["Orange Flower", "Jasmine", "Rose"],
  base: ["Jasmine", "Neroli"]
}, {
  name: "London Majesty",
  col: "Hotel",
  insp: "The Savoy®",
  fam: ["woodsy"],
  top: ["Spices", "Tobacco"],
  mid: ["Vanilla", "Cacao"],
  base: ["Wood Notes"]
}, {
  name: "Paris Elegance",
  col: "Hotel",
  insp: "W Hotel®",
  fam: ["floral", "fresh"],
  top: ["Bergamot", "Lemon", "Lemongrass"],
  mid: ["Magnolia", "Jasmine", "Lily"],
  base: ["Koa Wood", "Musk"]
}, {
  name: "Singapore Splendor",
  col: "Hotel",
  insp: "Marina Bay Sands®",
  fam: ["floral", "woodsy"],
  top: ["Cassis", "Peppercorn", "White Rose"],
  mid: ["Geranium", "Tonka Bean"],
  base: ["Oakmoss", "Cedarwood", "Musk"]
}, {
  name: "Pumpkin Spiced Harvest",
  col: "Seasonal",
  insp: "",
  fam: ["fruity"],
  top: ["Spiced Pumpkin"],
  mid: ["Coffee"],
  base: ["Cinnamon Sugar"]
}, {
  name: "Vanilla Pumpkin Mallow Mist",
  col: "Seasonal",
  insp: "",
  fam: ["fruity"],
  top: ["Pumpkin"],
  mid: ["Marshmallow"],
  base: ["Cream", "Vanilla"]
}, {
  name: "Peppermint Twilight",
  col: "Seasonal",
  insp: "",
  fam: ["fresh", "spa"],
  top: ["Peppermint"],
  mid: ["Mint", "Eucalyptus"],
  base: ["Vanilla", "Sandalwood"]
}, {
  name: "Winter Pine Whisper",
  col: "Seasonal",
  insp: "",
  fam: ["woodsy"],
  top: ["Pine"],
  mid: ["Raspberry"],
  base: ["Caramel", "Vanilla"]
}];

/* scent-family meta — muted, cream-friendly accents */
window.NB_FAMILIES_MAP = {
  fresh: {
    label: "Fresh",
    color: "#6f93a6",
    note: "Citrus, aquatic, cool air"
  },
  floral: {
    label: "Floral",
    color: "#c2849a",
    note: "Jasmine, rose, blossom"
  },
  fruity: {
    label: "Fruity",
    color: "#c2724f",
    note: "Berry, stone fruit, sweet"
  },
  woodsy: {
    label: "Woodsy",
    color: "#8a6240",
    note: "Sandalwood, cedar, amber"
  },
  tropics: {
    label: "Tropics",
    color: "#c79a45",
    note: "Coconut, pineapple, sun"
  },
  spa: {
    label: "Spa",
    color: "#7f9a82",
    note: "Eucalyptus, tea, calm"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesigns/homepage/data.js", error: String((e && e.message) || e) }); }

// redesigns/homepage/homepage2.js
try { (() => {
/* ==================================================================
   Nēbu Homepage v2 — interactions
   ================================================================== */
(function () {
  const FRAG = window.NB_FRAG,
    FAM = window.NB_FAMILIES_MAP;
  const LOGO = "../../assets/logo-nebu-without-slogan-colour.png";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const star = '<svg viewBox="0 0 24 24" fill="var(--accent)" stroke="none"><path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.5 5.7 21l2.3-7.1-6-4.5h7.6z"/></svg>';
  function ph(label, dark) {
    return `<div class="ph${dark ? " dark" : ""}"><img class="mark" src="${LOGO}" alt="">${label ? `<span class="lbl">${label}</span>` : ""}</div>`;
  }

  /* ---------- announcement rotator ---------- */
  (function () {
    const slides = $$("#anno .slide");
    let i = 0;
    setInterval(() => {
      slides[i].classList.remove("on");
      i = (i + 1) % slides.length;
      slides[i].classList.add("on");
    }, 4200);
  })();

  /* ---------- hero slideshow ---------- */
  (function () {
    const slides = $$("#hero .slide");
    const dotsWrap = $("#heroDots");
    let i = 0,
      timer;
    dotsWrap.innerHTML = slides.map((_, n) => `<button data-i="${n}" class="${n === 0 ? "on" : ""}"></button>`).join("");
    const dots = $$("#heroDots button");
    function show(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle("on", k === i));
      dots.forEach((d, k) => d.classList.toggle("on", k === i));
    }
    function reset() {
      clearInterval(timer);
      timer = setInterval(() => show(i + 1), 6500);
    }
    dots.forEach(d => d.addEventListener("click", () => {
      show(+d.dataset.i);
      reset();
    }));
    $("#heroPrev").addEventListener("click", () => {
      show(i - 1);
      reset();
    });
    $("#heroNext").addEventListener("click", () => {
      show(i + 1);
      reset();
    });
    reset();
  })();

  /* ---------- diffuser selector ---------- */
  const DIFFUSERS = [{
    space: "On the move",
    note: "Car · desk · travel",
    icon: '<path d="M5 17h14M6 17l1.5-5h9L18 17M8 12V8a4 4 0 0 1 8 0v4"/><circle cx="8" cy="18" r="1.5"/><circle cx="16" cy="18" r="1.5"/>',
    name: "NL50 Portable",
    cov: "Up to 200 sq ft",
    rib: "Cordless",
    desc: "Cordless and rechargeable — the signature Nēbu mist wherever the day takes you.",
    sqft: "200",
    runtime: "8 hrs",
    price: "89",
    was: null,
    save: null
  }, {
    space: "A room",
    note: "Bedroom · office · bath",
    icon: '<rect x="3" y="9" width="18" height="12" rx="1"/><path d="M3 9l9-6 9 6"/><path d="M9 21v-6h6v6"/>',
    name: "NL100",
    cov: "Up to 500 sq ft",
    rib: "Compact",
    desc: "A quiet, plug-in nebulizer sized for a single room — set it and forget it.",
    sqft: "500",
    runtime: "Continuous",
    price: "129",
    was: null,
    save: null
  }, {
    space: "Open-plan living",
    note: "Living room · studio",
    icon: '<path d="M3 21V10l9-7 9 7v11"/><path d="M3 21h18M9 21v-6h6v6M14 10h3v4h-3z"/>',
    name: "NL200 Bluetooth",
    cov: "Up to 1,000 sq ft",
    rib: "Best Seller",
    desc: "Our everyday flagship — powerful enough for an open floor, refined enough to disappear into it.",
    sqft: "1,000",
    runtime: "Continuous",
    price: "115",
    was: "149",
    save: "23%"
  }, {
    space: "Whole home",
    note: "Multi-room · HVAC",
    icon: '<path d="M3 21V8l9-5 9 5v13"/><path d="M3 21h18M8 13h8M8 17h8M12 3v5"/>',
    name: "NL300 HVAC",
    cov: "3,000+ sq ft",
    rib: "Limited $115",
    desc: "Connects to your HVAC to scent the entire home evenly — the signature-scent experience of a luxury hotel.",
    sqft: "3,000+",
    runtime: "Continuous",
    price: "115",
    was: "279",
    save: "59%"
  }];
  let selSpace = 2;
  function renderPicker() {
    $("#spacePicker").innerHTML = DIFFUSERS.map((d, i) => `<button class="space-opt ${i === selSpace ? "on" : ""}" data-i="${i}">
      <span class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">${d.icon}</svg></span>
      <span><span class="st">${d.space}</span><span class="ss">${d.note}</span></span>
      <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 18l6-6-6-6"/></svg>
    </button>`).join("");
  }
  function renderReco() {
    const d = DIFFUSERS[selSpace];
    const priceHtml = d.was ? `<span class="price"><b>$${d.price}</b><span class="was">$${d.was}</span></span><span class="save">Save ${d.save}</span>` : `<span class="price"><b>$${d.price}</b></span>`;
    $("#reco").innerHTML = `
      <div class="reco-art">${ph("[ " + d.name + " product shot ]")}<span class="rib">${d.rib}</span></div>
      <div class="reco-body">
        <div class="fam">Recommended for ${d.space.toLowerCase()}</div>
        <h3>${d.name}</h3>
        <div class="cov">${d.cov}</div>
        <p>${d.desc}</p>
        <div class="specs">
          <div class="sp"><div class="v">${d.sqft}</div><div class="k">Sq ft</div></div>
          <div class="sp"><div class="v">&lt;25dB</div><div class="k">Whisper-quiet</div></div>
          <div class="sp"><div class="v">${d.runtime}</div><div class="k">Run time</div></div>
        </div>
        <div class="reco-foot">${priceHtml}<a class="btn sm" href="#">Add to cart</a></div>
      </div>`;
  }
  renderPicker();
  renderReco();
  $("#spacePicker").addEventListener("click", e => {
    const b = e.target.closest(".space-opt");
    if (!b) return;
    selSpace = +b.dataset.i;
    renderPicker();
    renderReco();
  });

  /* ---------- fragrance collections tabs ---------- */
  // price tiers by collection feel
  function priceFor(f) {
    return f.col === "Designer" ? "$49" : f.col === "Hotel" ? "$45" : f.col === "Seasonal" ? "$39" : "$35";
  }
  const COLLECTIONS = [{
    key: "best",
    label: "Best Sellers",
    filter: f => f.best
  }, {
    key: "Hotel",
    label: "Hotel",
    filter: f => f.col === "Hotel"
  }, {
    key: "Designer",
    label: "Designer",
    filter: f => f.col === "Designer"
  }, {
    key: "fresh",
    label: "Fresh",
    filter: f => f.fam.includes("fresh")
  }, {
    key: "floral",
    label: "Floral",
    filter: f => f.fam.includes("floral")
  }, {
    key: "woodsy",
    label: "Woodsy",
    filter: f => f.fam.includes("woodsy")
  }, {
    key: "spa",
    label: "Spa",
    filter: f => f.fam.includes("spa")
  }, {
    key: "Seasonal",
    label: "Seasonal",
    filter: f => f.col === "Seasonal"
  }];
  let activeCol = 0;
  $("#colTabs").innerHTML = COLLECTIONS.map((c, i) => `<button data-i="${i}" class="${i === 0 ? "on" : ""}">${c.label}</button>`).join("");
  function card(f) {
    const insp = f.insp ? `inspired by ${f.insp}` : "a Nēbu original";
    return `<div class="pcard" onclick="NB.toast && NB.toast()">
      ${f.best ? '<span class="best">Best Seller</span>' : ""}
      <span class="heart" onclick="event.stopPropagation()"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 5a5 5 0 0 1 9.5 7c-2.5 4.5-9.5 9-9.5 9Z"/></svg></span>
      ${ph("fragrance oil")}
      <div class="pc-body">
        <div class="pc-fam">${f.col === "Original" || f.col === "Seasonal" ? FAM[f.fam[0]] ? FAM[f.fam[0]].label : "Original" : f.col}</div>
        <div class="pc-name">${f.name}</div>
        <div class="pc-ins">${insp}</div>
        <div class="pc-foot"><span class="pc-price">${priceFor(f)}</span><span class="add">Add</span></div>
      </div>
    </div>`;
  }
  function renderCol() {
    const c = COLLECTIONS[activeCol];
    const list = FRAG.filter(c.filter).slice(0, 8);
    $("#colGrid").innerHTML = list.map(card).join("");
  }
  renderCol();
  $("#colTabs").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    activeCol = +b.dataset.i;
    $$("#colTabs button").forEach(x => x.classList.toggle("on", x === b));
    renderCol();
  });

  /* ---------- reviews ---------- */
  $("#topStars").innerHTML = star.repeat(5);
  const REVIEWS = [{
    q: "Walking into my house now feels like checking into a five-star hotel. The NL200 fills the whole floor and you genuinely cannot hear it.",
    nm: "Maria R.",
    meta: "Verified · NL200 + Miami Serenity",
    av: "MR"
  }, {
    q: "I've tried every diffuser out there. The waterless mist is on another level — so much cleaner, and it lasts for hours, not minutes.",
    nm: "James T.",
    meta: "Verified · NL300 HVAC",
    av: "JT"
  }, {
    q: "Scheduling from the app changed everything. Citrus in the morning, sandalwood at night, all automatic. Guests always ask what it is.",
    nm: "Aisha L.",
    meta: "Verified · NL50 + 4 oils",
    av: "AL"
  }, {
    q: "The screw-in bottles make swapping scents by season effortless. No spills, no measuring — Velvet Rouge is my winter signature.",
    nm: "Daniel K.",
    meta: "Verified · NL200",
    av: "DK"
  }, {
    q: "Bought the NL300 on the $115 offer and connected it to our HVAC. The entire house smells incredible and it's so subtle. Worth every cent.",
    nm: "Priya S.",
    meta: "Verified · NL300 HVAC",
    av: "PS"
  }, {
    q: "Customer service helped me pick a scent over chat and it was a perfect match. The phthalate-free oils don't bother my allergies at all.",
    nm: "Helen M.",
    meta: "Verified · NL100 + 2 oils",
    av: "HM"
  }];
  $("#reviewGrid").innerHTML = REVIEWS.map(r => `<div class="tcard reveal">
    <div class="stars">${star.repeat(5)}</div>
    <p class="q">${r.q}</p>
    <div class="by"><span class="av">${r.av}</span><div><div class="nm">${r.nm}</div><div class="vmeta">${r.meta}</div></div></div>
  </div>`).join("");

  /* ---------- header shadow + reveal ---------- */
  const hdr = $("#siteHeader");
  window.addEventListener("scroll", () => hdr.classList.toggle("scrolled", window.scrollY > 16));
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  }), {
    threshold: .12
  });
  $$(".reveal").forEach(el => io.observe(el));
  window.NB = {
    toast() {}
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesigns/homepage/homepage2.js", error: String((e && e.message) || e) }); }

// ui_kits/storefront/App.jsx
try { (() => {
/* Nēbu storefront — App shell */
function NbApp() {
  const [cart, setCart] = React.useState([{
    ...window.NB_PRODUCTS[0],
    qty: 1
  }]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const add = p => {
    setCart(prev => {
      const found = prev.find(it => it.id === p.id);
      if (found) return prev.map(it => it.id === p.id ? {
        ...it,
        qty: it.qty + 1
      } : it);
      return [...prev, {
        ...p,
        qty: 1
      }];
    });
    setCartOpen(true);
  };
  const remove = idx => setCart(prev => prev.filter((_, i) => i !== idx));
  const count = cart.reduce((s, it) => s + it.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "nb-scroll",
    style: {
      height: '100vh',
      overflowY: 'auto',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(NbHeader, {
    cartCount: count,
    onCart: () => setCartOpen(true)
  }), /*#__PURE__*/React.createElement(NbHero, null), /*#__PURE__*/React.createElement(NbScentFamilies, null), /*#__PURE__*/React.createElement(NbFeatured, {
    onAdd: add
  }), /*#__PURE__*/React.createElement(NbValueProps, null), /*#__PURE__*/React.createElement(NbFooter, null), /*#__PURE__*/React.createElement(NbCartDrawer, {
    open: cartOpen,
    items: cart,
    onClose: () => setCartOpen(false),
    onRemove: remove
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(NbApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Footer.jsx
try { (() => {
/* Nēbu storefront — Footer + Cart drawer */

function NbFooter() {
  const {
    NewsletterForm
  } = window.NBuDesignSystem_6704c7;
  const cols = [{
    h: 'Shop',
    links: ['Diffusers', 'Fragrance Oils', 'Gift Sets', 'Refills', 'Bestsellers']
  }, {
    h: 'Discover',
    links: ['Scent Families', 'Fragrance Concierge', 'How It Works', 'The Journal']
  }, {
    h: 'Support',
    links: ['Contact', 'Shipping & Returns', 'FAQ', 'Track Order']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--nb-wine)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: '64px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '56px'
    }
  }, /*#__PURE__*/React.createElement(NewsletterForm, {
    style: {
      background: 'var(--nb-wine-dark)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: '40px',
      paddingBottom: '48px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-nebu-without-slogan-colour.png",
    alt: "N\u0113bu",
    style: {
      height: '34px',
      filter: 'brightness(0) invert(1)',
      marginBottom: '18px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      lineHeight: 1.7,
      color: 'rgba(255,255,255,.7)',
      maxWidth: '260px',
      margin: '0 0 18px'
    }
  }, "Luxury scent nebulizers and fragrance oils \u2014 quiet luxury, in the air."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px'
    }
  }, ['Instagram', 'Facebook'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      fontSize: '11px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--accent-soft)',
      textDecoration: 'none'
    }
  }, s)))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--accent-soft)',
      margin: '0 0 16px'
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '11px'
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: '13px',
      color: 'rgba(255,255,255,.8)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.target.style.color = '#fff',
    onMouseLeave: e => e.target.style.color = 'rgba(255,255,255,.8)'
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.15)',
      padding: '22px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'rgba(255,255,255,.6)'
    }
  }, "\xA9 2026 N\u0113bu Luxury \xB7 hello@nebuluxury.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'rgba(255,255,255,.6)'
    }
  }, "Privacy \xB7 Terms \xB7 Accessibility"))));
}
function NbCartDrawer({
  open,
  items,
  onClose,
  onRemove
}) {
  const {
    Button
  } = window.NBuDesignSystem_6704c7;
  const total = items.reduce((s, it) => s + parseFloat(it.price.replace(/[^0-9.]/g, '')) * it.qty, 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(20,0,4,.4)',
      zIndex: 90,
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity .3s'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: '390px',
      maxWidth: '92vw',
      background: '#fff',
      zIndex: 100,
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform .35s cubic-bezier(.4,0,.2,1)',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-pop)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px',
      borderBottom: '1px solid var(--border-default)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, "Your Bag (", items.length, ")"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      fontSize: '22px',
      cursor: 'pointer',
      color: 'var(--text-body)',
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 24px'
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-muted)',
      fontSize: '14px',
      textAlign: 'center',
      marginTop: '60px'
    }
  }, "Your bag is empty."), items.map((it, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      display: 'flex',
      gap: '14px',
      padding: '16px 0',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: it.img,
    alt: "",
    style: {
      width: '64px',
      height: '64px',
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-blush)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      fontWeight: 500,
      color: 'var(--text-heading)',
      marginBottom: '4px'
    }
  }, it.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, "Qty ", it.qty)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      fontWeight: 600
    }
  }, it.price), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(idx),
    style: {
      background: 'none',
      border: 'none',
      fontSize: '11px',
      color: 'var(--nb-wine)',
      cursor: 'pointer',
      padding: 0,
      marginTop: '6px'
    }
  }, "Remove"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '14px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '16px',
      fontWeight: 700
    }
  }, "$", total.toFixed(2))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true
  }, "Checkout"))));
}
window.NbFooter = NbFooter;
window.NbCartDrawer = NbCartDrawer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Header.jsx
try { (() => {
/* Nēbu storefront — Header + announcement bar */
function NbHeader({
  cartCount,
  onCart
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('.nb-scroll');
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 20);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  const nav = ['Diffusers', 'Fragrance Oils', 'Scent Families', 'Concierge', 'Journal'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--nb-wine-dark)',
      color: '#fff',
      textAlign: 'center',
      fontSize: '11px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      fontWeight: 500,
      padding: '9px 16px'
    }
  }, "Buy 2, Get 1 Free on all fragrances \xB7 Free shipping over $150"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--border-default)',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'box-shadow .3s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: '72px',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '26px'
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-body)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      transition: 'color .2s'
    },
    onMouseEnter: e => e.target.style.color = 'var(--nb-champagne)',
    onMouseLeave: e => e.target.style.color = 'var(--text-body)'
  }, n))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-nebu-without-slogan-colour.png",
    alt: "N\u0113bu",
    style: {
      height: '30px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(NbIcon, {
    name: "search"
  }), /*#__PURE__*/React.createElement(NbIcon, {
    name: "user"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onCart,
    style: {
      position: 'relative',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(NbIcon, {
    name: "bag"
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '-7px',
      right: '-9px',
      background: 'var(--nb-wine)',
      color: '#fff',
      fontSize: '10px',
      fontWeight: 700,
      minWidth: '17px',
      height: '17px',
      borderRadius: '999px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 4px'
    }
  }, cartCount))))));
}
function NbIcon({
  name
}) {
  const paths = {
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 21l-4.3-4.3"
    })),
    user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 21c0-4 3.6-7 8-7s8 3 8 7"
    })),
    bag: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 8h12l-1 12H7L6 8z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 8V6a3 3 0 0 1 6 0v2"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: "21",
    height: "21",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-body)",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      cursor: 'pointer'
    }
  }, paths[name]);
}
window.NbHeader = NbHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Hero.jsx
try { (() => {
/* Nēbu storefront — Hero slideshow (matches the 2026 redesign) */
function NbHero() {
  const {
    Button
  } = window.NBuDesignSystem_6704c7;
  const slides = window.NB_SLIDES;
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);
  const go = n => setI((n + slides.length) % slides.length);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: '620px',
      overflow: 'hidden',
      background: 'var(--nb-wine-dark)'
    }
  }, slides.map((s, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: idx === i ? 1 : 0,
      pointerEvents: idx === i ? 'auto' : 'none',
      transition: 'opacity 1.1s cubic-bezier(.4,0,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: "",
    onError: e => {
      e.target.style.display = 'none';
    },
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: idx === i ? 'scale(1)' : 'scale(1.05)',
      transition: 'transform 7s cubic-bezier(.25,.46,.45,.94)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse at 50% 55%, rgba(40,0,6,.15), rgba(20,0,4,.62)), linear-gradient(180deg, rgba(20,0,4,.25), rgba(20,0,4,.78))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      color: '#fff',
      maxWidth: '780px',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '16px',
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--accent-soft)',
      marginBottom: '22px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '40px',
      height: '1px',
      background: 'var(--rule-gold)'
    }
  }), s.eyebrow, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '40px',
      height: '1px',
      background: 'var(--rule-gold)'
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 'clamp(38px,5vw,60px)',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      margin: '0 0 18px'
    }
  }, s.l1, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent-soft)',
      fontWeight: 300
    }
  }, s.l2)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '16px',
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,.84)',
      maxWidth: '500px',
      margin: '0 auto 32px'
    }
  }, s.sub), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true
  }, s.cta)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(i - 1),
    style: arrowStyle('left'),
    "aria-label": "Previous"
  }, "\u2039"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(i + 1),
    style: arrowStyle('right'),
    "aria-label": "Next"
  }, "\u203A"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '28px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '10px',
      zIndex: 5
    }
  }, slides.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => go(idx),
    "aria-label": 'Slide ' + (idx + 1),
    style: {
      width: idx === i ? '42px' : '28px',
      height: '2px',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      background: idx === i ? 'var(--accent)' : 'rgba(255,255,255,.4)',
      borderRadius: '2px',
      transition: 'all .3s'
    }
  }))));
}
function arrowStyle(side) {
  return {
    position: 'absolute',
    top: '50%',
    [side]: '24px',
    transform: 'translateY(-50%)',
    zIndex: 5,
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,.3)',
    background: 'rgba(0,0,0,.18)',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '24px',
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
}
window.NbHero = NbHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Sections.jsx
try { (() => {
/* Nēbu storefront — content sections */

function NbScentFamilies() {
  const {
    ScentTile,
    SectionHeading
  } = window.NBuDesignSystem_6704c7;
  const [active, setActive] = React.useState('Designer');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-cream)',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Find Your Note",
    title: "Shop by",
    emphasis: "scent family",
    subtitle: "Eight curated worlds \u2014 from grand-hotel lobbies to forest air. Begin wherever your memory lives."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
      marginTop: '40px'
    }
  }, window.NB_FAMILIES.map(f => /*#__PURE__*/React.createElement(ScentTile, {
    key: f.label,
    icon: f.icon,
    label: f.label,
    count: f.count,
    active: active === f.label,
    onClick: e => {
      e.preventDefault();
      setActive(f.label);
    }
  })))));
}
function NbFeatured({
  onAdd
}) {
  const {
    ProductCard,
    SectionHeading
  } = window.NBuDesignSystem_6704c7;
  const tabs = ['All', 'Diffusers', 'Fragrance Oils'];
  const [tab, setTab] = React.useState('All');
  const items = window.NB_PRODUCTS.filter(p => tab === 'All' || p.kind === tab);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The Collection",
    title: "Loved by",
    emphasis: "the discerning"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      margin: '28px 0 40px'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      padding: '10px 20px',
      borderRadius: '999px',
      border: '1px solid ' + (tab === t ? 'var(--nb-wine)' : 'var(--border-default)'),
      background: tab === t ? 'var(--nb-wine)' : 'transparent',
      color: tab === t ? '#fff' : 'var(--text-secondary)',
      transition: 'all .2s'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '24px'
    }
  }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    image: p.img,
    family: p.family,
    title: p.title,
    price: p.price,
    compareAt: p.compareAt,
    badge: p.badge,
    onAdd: () => onAdd(p)
  })))));
}
function NbValueProps() {
  const items = [{
    t: 'Cold-Air Nebulizing',
    d: 'No heat, no water, no dilution — pure oil atomized into a dry micro-mist.'
  }, {
    t: 'Whisper-Quiet',
    d: 'Engineered below 25dB so the scent arrives, but the machine never does.'
  }, {
    t: 'App-Controlled',
    d: 'Schedule intensity and timing from anywhere over Bluetooth.'
  }, {
    t: '60-Day Returns',
    d: 'Find your signature scent risk-free, or send it back on us.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--nb-wine)',
      color: '#fff',
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '40px'
    }
  }, items.map((it, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '30px',
      color: 'var(--accent-soft)',
      marginBottom: '12px'
    }
  }, "0", idx + 1), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '14px',
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      margin: '0 0 8px'
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      lineHeight: 1.7,
      color: 'rgba(255,255,255,.74)',
      margin: 0
    }
  }, it.d)))));
}
window.NbScentFamilies = NbScentFamilies;
window.NbFeatured = NbFeatured;
window.NbValueProps = NbValueProps;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.js
try { (() => {
/* Nēbu storefront — shared fake data & helpers */
const NB_PRODUCTS = [{
  id: 'nl300',
  kind: 'Diffusers',
  family: 'Diffusers',
  title: 'NL300 Bluetooth Nebulizing Diffuser',
  price: '$115.00',
  compareAt: '$179.00',
  badge: {
    label: 'Best Seller',
    variant: 'wine'
  },
  img: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=700&q=80'
}, {
  id: 'miami',
  kind: 'Fragrance Oils',
  family: 'Designer',
  title: 'Miami Serenity Fragrance Oil',
  price: '$38.00',
  compareAt: '$54.00',
  badge: {
    label: '30% Off',
    variant: 'sale'
  },
  img: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=700&q=80'
}, {
  id: 'santal',
  kind: 'Fragrance Oils',
  family: 'Forest',
  title: 'Santal Tropics Fragrance Oil',
  price: '$42.00',
  badge: {
    label: 'New',
    variant: 'gold'
  },
  img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=700&q=80'
}, {
  id: 'nl50',
  kind: 'Diffusers',
  family: 'Portable',
  title: 'NL50 Portable Car & Travel Diffuser',
  price: '$89.00',
  img: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=700&q=80'
}, {
  id: 'vintage',
  kind: 'Fragrance Oils',
  family: 'Spa Retreat',
  title: 'Vintage Woodland Fragrance Oil',
  price: '$40.00',
  img: 'https://images.unsplash.com/photo-1610461888750-10bfc601b874?w=700&q=80'
}, {
  id: 'nl200',
  kind: 'Diffusers',
  family: 'Diffusers',
  title: 'NL200 Bluetooth Cold-Air Diffuser',
  price: '$149.00',
  compareAt: '$199.00',
  img: 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=700&q=80'
}, {
  id: 'garden',
  kind: 'Fragrance Oils',
  family: 'Dream Garden',
  title: 'Fleur d’Oranger Fragrance Oil',
  price: '$39.00',
  img: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=700&q=80'
}, {
  id: 'hotel',
  kind: 'Fragrance Oils',
  family: 'Hotel',
  title: 'The One Hotel Signature Oil',
  price: '$44.00',
  badge: {
    label: 'Best Seller',
    variant: 'wine'
  },
  img: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=700&q=80'
}];
const NB_FAMILIES = [{
  icon: '../../assets/icons/hotel.png',
  label: 'Hotel',
  count: 12
}, {
  icon: '../../assets/icons/champagne.png',
  label: 'Designer',
  count: 9
}, {
  icon: '../../assets/icons/bow-tie.png',
  label: 'Diva',
  count: 5
}, {
  icon: '../../assets/icons/flower-bouquet.png',
  label: 'Dream Garden',
  count: 8
}, {
  icon: '../../assets/icons/grass.png',
  label: 'Forest',
  count: 6
}, {
  icon: '../../assets/icons/pomegranate.png',
  label: 'Fruits',
  count: 6
}, {
  icon: '../../assets/icons/stones.png',
  label: 'Spa Retreat',
  count: 7
}, {
  icon: '../../assets/icons/wind.png',
  label: 'Neutralizers',
  count: 4
}];
const NB_SLIDES = [{
  eyebrow: 'Limited Time Offer',
  l1: 'Black NL300',
  l2: 'Special Price $115',
  sub: 'No coupon code required. Our flagship cold-air diffuser, in matte black.',
  cta: 'Shop NL300',
  img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80'
}, {
  eyebrow: 'Fragrance of the Month',
  l1: 'Miami Serenity',
  l2: '30% Off',
  sub: 'Use code MIA30 at checkout. All sizes included.',
  cta: 'Shop the Sale',
  img: 'https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=1600&q=80'
}, {
  eyebrow: 'Fragrance Concierge',
  l1: 'Not sure where',
  l2: 'to start?',
  sub: 'Let our concierge match you to your perfect scent in just 60 seconds.',
  cta: 'Find My Scent',
  img: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=1600&q=80'
}];
window.NB_PRODUCTS = NB_PRODUCTS;
window.NB_FAMILIES = NB_FAMILIES;
window.NB_SLIDES = NB_SLIDES;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ScentTile = __ds_scope.ScentTile;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NewsletterForm = __ds_scope.NewsletterForm;

})();
