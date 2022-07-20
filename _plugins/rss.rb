require 'open-uri'
require 'xmlhasher'

XmlHasher.configure do |config|
  config.string_keys = true
end

class RSS
  def initialize(site)
    @site = site
  end

  def munge!
    feed_url = YAML.load_file('_config.yml')["rss"]["source"]
    rss = URI.open(feed_url) {|f| f.read }
    @site.config['rss'] = XmlHasher.parse(rss)['rss']['channel']['item']
  end
end

Jekyll::Hooks.register :site, :after_init do |site|
  RSS.new(site).munge!
end
