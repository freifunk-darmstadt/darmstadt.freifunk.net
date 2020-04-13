require 'html-proofer'

task :build do
  sh "bundle exec jekyll build -d output"
end

task :serve do
  sh "bundle exec jekyll serve"
end

task :htmlproofer do
  options = {:url_ignore => [/http(s?):\/\/(.*)\.ffda/, /^http:\/\/192\.168\..*/],
             :hydra => { :max_concurrency => 5 },
             :assume_extension => true}
  HTMLProofer.check_directory("./output",options).run
end

task :trailing_spaces do
  output = `find pages _posts _sass -type f -exec egrep -l \" +$\" {} \\;`
  if output.strip != "" then
    raise "files containing trailing spaces:\n" + output
  end
end

task :test => :build do
  Rake::Task['trailing_spaces'].invoke
  Rake::Task['htmlproofer'].invoke
end

task :clean do
  sh "bundle exec rm -R ./output || true"
end
