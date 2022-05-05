require 'rexml/document'
require 'open-uri'

module Jekyll
  class RssBlock < Liquid::Block

    def render(context)
      text = super
      feed_url = YAML.load_file('_config.yml')["rss"]["source"]
      
      feed_contents = URI.open(feed_url) {|f| f.read }
      feed_xml = REXML::Document.new(feed_contents)

      text.gsub!(/{ url }/, REXML::XPath.first(feed_xml, "//item/link").text.to_s)
      text.gsub!(/{ title }/, REXML::XPath.first(feed_xml, "//item/title").text.to_s)
      text
    end
  end
end

Liquid::Template.register_tag('rss', Jekyll::RssBlock)
